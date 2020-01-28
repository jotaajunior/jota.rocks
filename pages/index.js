import Head from 'next/head';
import fetch from 'isomorphic-unfetch';

import { GitHub } from 'react-feather';

const myGithub = 'jotaajunior';

const Index = ({ name, bio, html_url }) => (
  <>
    <Head>
      <title>{name}</title>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:400,700"
        rel="stylesheet"
      />
      <script src="https://unpkg.com/feather-icons"></script>
    </Head>

    <div className="root">
      <div className="content">
        <h1 className="name">{name}</h1>
        <div className="description">Hi, I'm a {bio}</div>
        <div className="links">
          <a className="button" title="Go to my Github profile" href={html_url}>
            <GitHub size={24} />
            Follow me on Github
          </a>
        </div>
      </div>
    </div>

    <style jsx global>{`
      body,
      html {
        width: 100%;
        height: 100%;
        margin: 0;
        font-family: 'Poppins', sans-serif;
        font-size: 20px;
        background-color: #282a36;
        color: #f8f8f2;
      }

      .root {
        display: flex;
        height: 100vh;
        width: 100vw;
        justify-content: center;
      }

      .content {
        height: 100%;
        width: 80%;

        text-align: center;

        display: flex;
        justify-content: center;
        flex-direction: column;
      }

      .name {
        color: #50fa7b;
        margin-bottom: 1em;
        line-height: 0;
      }

      .links {
        display: flex;
        justify-content: center;
        margin-top: 1em;
      }

      .button {
        width: 300px;
        padding: 15px;

        font-weight: bold;
        text-decoration: none;
        color: #f8f8f2;

        border: 2px solid #f8f8f2;
        border-radius: 4px;

        display: flex;
        align-items: center;
        justify-content: center;

        transition: 333ms;
      }

      .button:hover {
        background-color: #f8f8f2;
        color: #282a36;
      }

      .button:focus {
        margin-top: 1px;
      }

      .button svg {
        margin-right: 0.25em;
      }

      ::selection {
        background-color: #44475a;
      }
    `}</style>
  </>
);

Index.getInitialProps = async () => {
  const res = await fetch(`https://api.github.com/users/${myGithub}`);
  const { name, bio, html_url } = await res.json();

  return { name, bio, html_url };
};

export default Index;
