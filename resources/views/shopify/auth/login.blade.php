<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link
        rel="stylesheet"
        href="https://unpkg.com/@shopify/polaris@5.5.0/dist/styles.css"
    />
    <link href="{{ asset('assets/css/login.css') }}" rel="stylesheet">

    <title>Login | Shopify POD app</title>
</head>
<body>

<div
    style="
        --top-bar-background: #00848e;
        --top-bar-background-lighter: #1d9ba4;
        --top-bar-color: #f9fafb;
        --p-frame-offset: 0px;
      "
>
    <div class="Polaris-Page">
        <div class="Polaris-Page__Content">
            <div class="img-container">
                <img  class="login-img" src="https://shopify-assets.shopifycdn.com/accounts/production/oauth_provider/brand/logo/Shopify/logo.svg?v=1602255212" />
            </div>
            <div class="Polaris-Layout">
                <form method="GET" action="{{ route('home-alt') }}">

                <div class="next-input-wrapper">
                    <label class="next-label" for="shop_domain">Store name</label>
                    <div class="next-input-wrapper__loading-wrapper">
                        <div class="next-input-wrapper__loading-bar"></div>
                        <input autofocus="autofocus"
                               placeholder="myshop.myshopify.com"
                               class="next-input"
                               size="30"
                               type="text"
                               name="shop"
                               id="shop_domain">
                    </div>
                </div>

                    <div class="submit-form">
                        <button
                            style="width:100%"
                            type="submit"
                            class="Polaris-Button Polaris-Button--primary"
                        >
                            <span class="Polaris-Button__Content">
                                <span>Login</span>
                            </span>
                        </button>
                    </div>

                </form>
            </div>
        </div>
    </div>
</div>


</body>
</html>
