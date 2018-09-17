import { injectGlobal } from "emotion";

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,600');
    @import url('https://fonts.googleapis.com/css?family=Permanent+Marker');

    html, body, #root {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        font-family: 'Fira Sans', sans-serif;
        ${"" /* font-size: 62.5%; */}
    }
    *, *::before, *::after { padding: 0; margin: 0; box-sizing: inherit; font-family: inherit; }
`;
