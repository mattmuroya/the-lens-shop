import { Link } from "react-router-dom";

export default function NothingHerePage() {
  return (
    <main className="error">
      <div className="error-wrapper">
        <p>There's nothing here!</p>
        <p><Link to="/">Go Home</Link></p>
      </div>
    </main>
  )
}