export default function UtilitiesPage() {
    return (<>
        <h1>Utilities</h1>

        <h2>injectCollectJS(collectJsUrl, tokenizationKey)</h2>
        <p>
            Inserts the Collect.js script to the DOM and returns the CollectJS object from a Promise.
        </p>

        <div>
            <code>
                <pre>
                    const collectJsPromise = injectCollectJS('https://secure.networkmerchants.com/token/Collect.js', '5mN8N7-jhr55W-N22pxX-uAW2s9')
                </pre>
            </code>
        </div>

        <h3>Parameters</h3>

        <strong>collectJsUrl</strong>: string

        <p>
            The URL used to load Collect.js. This is the src value that will be passed into a &lt;script&gt;.
        </p>

        <p>
            <i>Example</i>: 'https://secure.networkmerchants.com/token/Collect.js'
        </p>

        <strong>tokenizatonKey</strong>: string

        <p>
            The tokenization key for Collect.js. This is a public key created in your account.
        </p>

        <p>
            <i>Example</i>: '5mN8N7-jhr55W-N22pxX-uAW2s9'
        </p>
    </>)
}