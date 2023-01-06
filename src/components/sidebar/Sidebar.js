import { Link } from "react-router-dom"

const Sidebar = ({ user }) => {
  return (
    <aside className="sidebar">
      <div className="top">
        <img
          src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
          alt=""
          className="profile-img"
        />
      </div>
      <hr />
      <div className="bottom">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/books">
            <li>
              <i className="fa-solid fa-book"></i> <span>All Books</span>
            </li>
          </Link>
          {user?.role === "teacher" && (
            <>
              <Link to="/books/add">
                <li>
                  <i className="fa-solid fa-book"></i>
                  <span>Add Book</span>
                </li>
              </Link>

              <Link to="/transactions">
                <li>
                  <i className="fa-solid fa-book-open-reader"></i>{" "}
                  <span>Transactions</span>
                </li>
              </Link>
            </>
          )}

          <Link to="/mybooks">
            <li>
              <i className="fa-solid fa-book-open-reader"></i>{" "}
              <span>My Books</span>
            </li>
          </Link>

          <p className="title">USER</p>
          <Link to="/profile">
            <li>
              <i className="fa-solid fa-user"></i> <span>Profile</span>
            </li>
          </Link>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
