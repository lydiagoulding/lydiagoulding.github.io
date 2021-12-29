export default function ExamplePage() {
    return (<>
        <h1>Example</h1>

        <h2>App.js</h2>
        <div>
            <code>
                <pre>
import './App.css';{"\n"}
import PaymentForm from "./PaymentForm";{"\n"}
import &#123; CollectJSProvider, injectCollectJS &#125; from "@lydiagoulding/react-nmi-collectjs";{"\n"}
                    {"\n"}
const collectJS = injectCollectJS('https://secure.networkmerchants.com/token/Collect.js', '5mN8N7-jhr55W-N22pxX-uAW2s9');{"\n"}
                    {"\n"}
function App() &#123;{"\n"}
&nbsp;&nbsp;return ({"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="App"&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;CollectJSProvider collectJSPromise=&#123;collectJS&#125;&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;PaymentForm/&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/CollectJSProvider&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;{"\n"}
&nbsp;&nbsp;);{"\n"}
&#125;{"\n"}
                    {"\n"}
export default App;{"\n"}
                </pre>
            </code>
        </div>

        <h2>PaymentForm.js</h2>
        <div>
            <code>
                <pre>
import &#123;{"\n"}
&nbsp;&nbsp;useCollect,{"\n"}
&nbsp;&nbsp;CardNumberInput,{"\n"}
&nbsp;&nbsp;CardExpirationInput,{"\n"}
&nbsp;&nbsp;CheckNameInput,{"\n"}
&nbsp;&nbsp;CardCVVInput,{"\n"}
&nbsp;&nbsp;CheckAccountInput,{"\n"}
&nbsp;&nbsp;CheckRoutingNumberInput,{"\n"}
&nbsp;&nbsp;ValidationContainer,{"\n"}
&nbsp;&nbsp;ValidationContainerFields{"\n"}
&#125; from "@lydiagoulding/react-nmi-collectjs";{"\n"}
import &#123; useCallback, useState &#125; from "react";{"\n"}
                    {"\n"}
export default function PaymentForm() &#123;{"\n"}
&nbsp;&nbsp;const [ collect, response, reset ] = useCollect(&#123;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;validCss: &#123;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"color": "green",{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"background-color": "cyan"{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&#125;{"\n"}
&nbsp;&nbsp;&#125;);{"\n"}
{"\n"}
&nbsp;&nbsp;const onSubmit = useCallback((e) =&gt; &#123;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;e.preventDefault();{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;collect.startPaymentRequest();{"\n"}
&nbsp;&nbsp;&#125;, [collect]);{"\n"}
&nbsp;&nbsp;                    {"\n"}
&nbsp;&nbsp;const [tab, setTab] = useState('credit');{"\n"}
&nbsp;&nbsp;                    {"\n"}
&nbsp;&nbsp;const onRestart = useCallback((e) =&gt; &#123;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;e.preventDefault();{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;reset();{"\n"}
&nbsp;&nbsp;&#125;, [reset]);{"\n"}
&nbsp;&nbsp;                    {"\n"}
&nbsp;&nbsp;return (&lt;form style=&#123;&#123;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;'maxWidth': '500px',{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;'margin': "0 auto"{"\n"}
&nbsp;&nbsp;&#125;&#125;&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick=&#123;(e) =&gt; &#123;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e.preventDefault();{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setTab('credit'){"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;collect.configure();{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;&#125;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CreditCard{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick=&#123;(e) =&gt; &#123;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e.preventDefault();{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setTab('check');{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;collect.configure();{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;&#125;&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Checks{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&#123;tab === 'credit' && ({"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ValidationContainer validationFields=&#123;[ValidationContainerFields.ccNumber]&#125;&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;(&#123;isValid, errors&#125;) =&gt; ({"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit Card Number{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;isValid ? ({"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span&gt;Valid!&lt;/span&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;) : ({"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;errors.map(error =&gt; ({"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;&#123;error.message&#125;&lt;/li&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;))&#125;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)&#125;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;CardNumberInput/&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/label&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)&#125;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ValidationContainer&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                    {"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Expiration{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;CardExpirationInput/&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/label&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CVV{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;CardCVVInput/&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/label&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;)&#125;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                    {"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&#123;tab === 'check' && ({"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Routing{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;CheckNameInput/&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/label&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Account Number{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;CheckAccountInput/&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/label&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;CheckRoutingNumberInput/&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/label&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;)&#125;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;                    {"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick=&#123;onSubmit&#125;&gt;Submit&lt;/button&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;JSON.stringify(response)&#125;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick=&#123;onRestart&#125;&gt;Restart&lt;/button&gt;{"\n"}
&nbsp;&nbsp;&lt;/form&gt;);{"\n"}
&#125;{"\n"}
                </pre>
            </code>
        </div>
    </>)
}