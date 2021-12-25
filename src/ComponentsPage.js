export default function ComponentsPage() {
    return (
        <>
            <h1>Inputs</h1>
            <p>
                Inputs are Collect.js fields that capture specific pieces of payment data. After a field is rendered to the DOM, you must run CollectJS.configure() to allow Collect.js to mount the field. The data a user puts in the fields are controlled internally by Collect.js and are not accessible by react-nmi-collectjs.
            </p>

            <h2>CardCVVInput</h2>
            <p>
                CVVs are sometimes optional for credit card data. If used, you must also use CardNumberInput and CardExpirationInput to create a complete payment token.
            </p>
            <div>
                <code>
                    &lt;CardCVVInput /&gt;
                </code>
            </div>


            <h2>CardExpirationInput</h2>
            <p>
                To complete a payment token with card data, you must also use CardNumberInput.
            </p>
            <div>
                <code>
                    &lt;CardExpirationInput /&gt;
                </code>
            </div>

            <h2>CardNumberInput</h2>
            To complete a payment token with card data, you must also use CardExpirationInput.

            <div>
                <code>
                    &lt;CardNumberInput /&gt;
                </code>
            </div>


            <h2>CheckAccountInput</h2>
            <p>
                Collects a checking account number. To complete a payment token with check data, you must also use CheckRoutingNumberInput.
            </p>

            &lt;CheckAccountInput /&gt;

            <h2>CheckRoutingNumberInput</h2>
            <p>
                Collects a bank routing number. To complete a payment token with check data, you must also use CheckAccountInput.
            </p>

            &lt;CheckAccountInput /&gt;
            <h2>CheckNameInput</h2>
            <p>
                This field is usually optional. Collects a name on a checking account. To complete a payment token with check data, you must also use CheckAccountInput and CheckRoutingNumber.
            </p>

            &lt;CheckNameInput /&gt;

            <h2>ValidationContainer</h2>
            <p>
                Provides information about errors in the inputs. If errors are present, you will not be able to produce a payment token.
            </p>

            <div>
                <code>
                    <pre>
                    &lt;ValidationContainer validationFields=&#123;[{"\n"}
                    &nbsp;&nbsp;ValidationContainerFields.ccNumber,{"\n"}
                    &nbsp;&nbsp;ValidationContainerFields.ccExp,{"\n"}
                    &nbsp;&nbsp;ValidationContainerFields.cvv,{"\n"}
                    ]&#125;&gt;{"\n"}
                        &nbsp;&nbsp;&#123;(&#123;isValid, errors&#125;) =&gt; ({"\n"}
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;&gt;{"\n"}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;isValid ? ({"\n"}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span&gt;Valid!&lt;/span&gt;{"\n"}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;) : ({"\n"}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt;{"\n"}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;errors.map(error =&gt; ({"\n"}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li key=&#123;error.fieldName&#125;&gt;&#123;error.message&#125;&lt;/li&gt;{"\n"}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;))&#125;{"\n"}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;{"\n"}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)&#125;{"\n"}
                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/&gt;{"\n"}
                        &nbsp;&nbsp;)&#125;{"\n"}
                        &lt;/ValidationContainer&gt;{"\n"}
                    </pre>
                </code>
            </div>

            <h3>Props</h3>

            <strong>validationFields</strong>: Array of strings

            <p>
                If provided, errors will be filtered to only include errors for these specific fields. If omitted, all errors will be provided. Supported options are provided via the ValidationCotnainerFields variable.
            </p>

            <h3>Render Props</h3>

            <strong>Errors</strong>: Error[]

            <p>
                An array of all the errors that have occurred. Each field will have a maximum of 1 error - only the most recent error is provided here.
            </p>

            Error object:

            <div>
                <code>
                    <pre>
                        &#123;{"\n"}
                        &nbsp;&nbsp;fieldName: 'ccnumber|ccexp|cvv|checkaccount|checkaba|checkname',{"\n"}
                        &nbsp;&nbsp;message: 'This field is invalid'{"\n"}
                        &#125;{"\n"}
                    </pre>
                </code>
            </div>

            <strong>isValid</strong>: boolean

            <p>
                False if there are errors. True if there are no errors. This is useful for enabling or disabling a submit button that triggers CollectJS.startPaymentRequest().
            </p>
        </>
    )
}