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
    <title>Shopify POD app</title>
</head>
<body>
<div id="app">
    <div
        style="display: flex;height: 100vh;
                flex-direction: column;
                justify-content: center;
                align-items: center;">
        <div style="margin-bottom: 55px;margin-left: -55px;">
            <img src="{{asset('assets/img/podify.png')}}" alt="podify"/>
        </div>
        <div style="--top-bar-background:#00848e; --top-bar-background-lighter:#1d9ba4; --top-bar-color:#f9fafb; --p-frame-offset:0px;"><span class="Polaris-Spinner Polaris-Spinner--colorTeal Polaris-Spinner--sizeLarge"><svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.542 1.487A21.507 21.507 0 00.5 22c0 11.874 9.626 21.5 21.5 21.5 9.847 0 18.364-6.675 20.809-16.072a1.5 1.5 0 00-2.904-.756C37.803 34.755 30.473 40.5 22 40.5 11.783 40.5 3.5 32.217 3.5 22c0-8.137 5.3-15.247 12.942-17.65a1.5 1.5 0 10-.9-2.863z"></path>
    </svg></span><span role="status"><span class="Polaris-VisuallyHidden">Spinner example</span></span></div>

    </div>

</div>

<input type="hidden" id="apiKey" value="{{ config('shopify-app.api_key') }}">
<input type="hidden" id="shopOrigin" value="{{ Auth::user()->name }}">

<script defer src="{{asset('js/app.js')}}"></script>

</body>
</html>
