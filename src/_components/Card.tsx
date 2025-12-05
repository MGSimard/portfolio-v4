export function Card() {
  return (
    <section className="card">
      <div className="card-header">
        <div className="card-title">
          SIGNED IN AS <span>MGSIMARD</span>
        </div>
        <div className="card-status">NO INTERNET</div>
      </div>
      <div className="card-body">
        <h2>SUGGESTIONS</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      </div>
      <div className="card-footer">
        <ul>
          <li>INTERRUPTED SIGNAL</li>
          <li>ONLINE - DEPLOY FOLDER WHEN READY.</li>
          <li>2038 282 92L28</li>
        </ul>
        <div>
          <button type="button">
            <div>H</div>
            <span>HELP</span>
          </button>
          <button type="button">
            <div>ESC</div>
            <span>CLOSE</span>
          </button>
        </div>
      </div>
    </section>
  );
}
