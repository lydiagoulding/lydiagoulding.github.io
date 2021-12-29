export default function HooksPage() {
    return (<>
        <h1>Hooks</h1>

        <h2>useCollect(config)</h2>
        <p>
            Exposes critical components of Collect.js
        </p>

        <div>
            <code>
                <pre>
        const config = {};{"\n"}
        {"\n"}
        const [CollectJS, response, reset] = useCollect(config);{"\n"}
                </pre>
            </code>
        </div>

        <h3>Parameters</h3>

        <p>
            <strong>config</strong>: A JavaScript object that can be passed to CollectJS.configure(). For documentation on acceptable options, see official documentation:
        </p>

        <div>
            <a href="https://secure.networkmerchants.com/gw/merchants/resources/integration/integration_portal.php#cjs_integration_inline2">Reference of available options</a> - useful for understanding what options are available and what they do.
        </div>
        <div>
            <a href="https://secure.networkmerchants.com/gw/merchants/resources/integration/integration_portal.php#cjs_example_inline3">Reference for JavaScript Interface</a> - useful for understanding how to pass the options via JavaScript instead of HTML.
        </div>


        <h3>Returns</h3>

        <p>
            <strong>First</strong>: The CollectJS global object. This is the object that is typically accessed via
            window.CollectJS and contains the methods like configure and startPaymentsRequest.
        </p>

        <p>
            <i>CollectJS.configure</i> - renders &lt;iframes&gt; into fields to make them actually appear.
        </p>

        <p>
            <i>CollectJS.startPaymentsRequest</i> - Once all the fields are completed and &lt;ValidationContainer&gt; displays no errors,
            startPaymentsRequest should be called to produce a paymentToken. Successfully calling this function will cause the paymentToken to become available.
        </p>

        <p>
            <strong>Second</strong>: The response from Collect.js containing a paymentToken representing the customer's payment data. This should be sent from a server to the Payments API. Before CollectJS.startPaymentsRequest() is called, this will be null.
        </p>

        <p>
            <strong>Third</strong>: A function allowing you to reset the paymentToken. Calling this reset the response and allow you to create a new response with new payment information.
        </p>
    </>)
}