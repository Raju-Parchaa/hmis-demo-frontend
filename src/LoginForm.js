const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <label>
            name :{" "}
            <input
              type="text"
              value={props.name}
              name="name"
              onChange={props.setName}
            />
          </label>
        </div>
        <div>
          <label>
            password :{" "}
            <input
              type="password"
              value={props.password}
              name="password"
              onChange={props.setPassword}
            />
          </label>
        </div>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LoginForm;
