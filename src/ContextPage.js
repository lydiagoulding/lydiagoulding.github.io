export default function ContextPage() {
    return (<>
        <h1>Context</h1>

        <h2>CollectJSProvider</h2>
        <p>
            This context provider must wrap all other usages of react-nmi-collectjs components. This context is an
            internal feature for react-nmi-collectjs. The underlying context should not be integrated to.
        </p>

        <div>
            <code>
                <pre>
        const collectJSPromise = injectCollectJS('https://secure.networkmerchants.com/token/Collect.js', '5mN8N7-jhr55W-N22pxX-uAW2s9'){"\n"}
        {"\n"}
        function App() &#123;{"\n"}
        &nbsp;&nbsp;return  ({"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;CollectJSProvider collectJSPromise=&#123;collectJSPromise&#125;&gt;{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// ... Components{"\n"}
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/CollectJSProvider&gt;{"\n"}
        &nbsp;&nbsp;);{"\n"}
        &#125;{"\n"}
                </pre>
            </code>
        </div>

        <h3>Props:</h3>

        <strong>collectJSPromise</strong>: Promise &lt;CollectJS&gt;

        <p>
            A promise that resolves to the CollectJS object initialized by the Collect.js script. This should be created
            from the <code>injectCollectJS</code> utility.
        </p>
    </>)
}