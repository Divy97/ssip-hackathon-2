import "./result.styles.css";
const Result = () => {
  return (
    <>
      <form action="">
        <section class="left">
          <div class="input-container">
            <label htmlFor="uid">Enter UID</label>
            <input type="text" />
          </div>
        </section>
        <section class="right">
          <div class="input-container">
            <label htmlFor="password">Enter Password</label>
            <input type="password" />
          </div>
        </section>
        <div class="send-container">
          <input type="submit" value="Send" onclick="return true" />
        </div>
      </form>
    </>
  );
};

export default Result;
