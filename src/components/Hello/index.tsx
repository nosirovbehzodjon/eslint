const Hello = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "50px",
      }}
    >
      <h1>Hello</h1>
      <ul
        style={{
          display: "flex",
          padding: 0,
          listStyle: "none",
          fontSize: "1.6rem",
          gap: "14px",
        }}
      >
        <li>🚀 Vite</li>
        <li>🔥 React</li>
        <li>📖 TypeScript</li>
        <li>🔨 Eslint</li>
        <li>💅 Prettier</li>
      </ul>
      <p>Don&apos;t forgot to install Eslint and Prettier in your VSCode</p>
      <div>
        <a
          style={{ color: "#F24C4C" }}
          target="_blank"
          href="https://github.com/kothing/vite-react-ts-eslint-prettier"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default Hello;
