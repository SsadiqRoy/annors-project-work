import { LuScrollText } from "react-icons/lu";
import { IoSettingsSharp } from "react-icons/io5";
import { MdHowToVote } from "react-icons/md";
import InnerMenu from "../_components/InnerMenu";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src="/images/knust-logo.png" alt="Logo" />
        <h2> Dashboard</h2>
      </div>

      <ul className="sidebar-menu">
        <li className="sidebar-menu-item">
          <Link href="/dashboard">
            <span className="sidebar-menu-item-icon">
              <MdHowToVote />
            </span>
            <span className="sidebar-menu-item-text">SRC elecetions</span>
          </Link>
        </li>

        {/*  */}

        <InnerMenu title="College elections">
          <div className="sidebar-menu-inner_covered">
            <div className="sidebar-menu-inner_covered-list">
              <li className="sidebar-menu-item">
                <Link href="#">
                  <span className="sidebar-menu-item-icon">
                    <img src="/images/canr.png" alt="College Of Agriculture" />
                  </span>
                  <span className="sidebar-menu-item-text">College of Agriculture and Natural Resources</span>
                </Link>
              </li>
              <li className="sidebar-menu-item">
                <Link href="#">
                  <span className="sidebar-menu-item-icon">
                    <img src="/images/cabe.png" alt="College Of Agriculture" />
                  </span>
                  <span className="sidebar-menu-item-text">College of Art and Built Environment</span>
                </Link>
              </li>
              <li className="sidebar-menu-item">
                <Link href="#">
                  <span className="sidebar-menu-item-icon">
                    <img src="/images/coe.png" alt="College Of Agriculture" />
                  </span>
                  <span className="sidebar-menu-item-text">College of Engineering</span>
                </Link>
              </li>
              <li className="sidebar-menu-item">
                <Link href="#">
                  <span className="sidebar-menu-item-icon">
                    <img src="/images/chs.png" alt="College Of Agriculture" />
                  </span>
                  <span className="sidebar-menu-item-text">College of Healt Science</span>
                </Link>
              </li>
              <li className="sidebar-menu-item">
                <Link href="#">
                  <span className="sidebar-menu-item-icon">
                    <img src="/images/cohss.png" alt="College Of Agriculture" />
                  </span>
                  <span className="sidebar-menu-item-text">College of Humanities and Social Science</span>
                </Link>
              </li>
              <li className="sidebar-menu-item">
                <Link href="#">
                  <span className="sidebar-menu-item-icon">
                    <img src="/images/cos.png" alt="College Of Agriculture" />
                  </span>
                  <span className="sidebar-menu-item-text">College of Science</span>
                </Link>
              </li>
            </div>
          </div>
        </InnerMenu>

        <InnerMenu title="hall elections">
          <div className="sidebar-menu-inner_covered">
            <div className="sidebar-menu-inner_covered-list">
              <li className="sidebar-menu-item">
                <Link href="#">
                  <span className="sidebar-menu-item-icon">
                    <img src="/images/domite.png" alt="African Hall" />
                  </span>
                  <span className="sidebar-menu-item-text">African Hall</span>
                </Link>
              </li>
              <li className="sidebar-menu-item">
                <Link href="#">
                  <span className="sidebar-menu-item-icon">
                    <img src="/images/spartans.png" alt="Independence Hall" />
                  </span>
                  <span className="sidebar-menu-item-text">Independence Hall</span>
                </Link>
              </li>
              <li className="sidebar-menu-item">
                <Link href="#">
                  <span className="sidebar-menu-item-icon">
                    <img src="/images/queens.png" alt="Queens Hall" />
                  </span>
                  <span className="sidebar-menu-item-text">Queen Elizabeth II Hall</span>
                </Link>
              </li>
              <li className="sidebar-menu-item">
                <Link href="#">
                  <span className="sidebar-menu-item-icon">
                    <img src="/images/republic.png" alt="Republic Hall" />
                  </span>
                  <span className="sidebar-menu-item-text">Republic Hall</span>
                </Link>
              </li>
              <li className="sidebar-menu-item">
                <Link href="#">
                  <span className="sidebar-menu-item-icon">
                    <img src="/images/conti-with-bg.png" alt="Unity Hall" />
                  </span>
                  <span className="sidebar-menu-item-text">Unity Hall</span>
                </Link>
              </li>
              <li className="sidebar-menu-item">
                <Link href="#">
                  <span className="sidebar-menu-item-icon">
                    <img src="/images/katanga.png" alt="University Hall" />
                  </span>
                  <span className="sidebar-menu-item-text">University Hall</span>
                </Link>
              </li>
            </div>
          </div>
        </InnerMenu>

        {/*  */}

        <li className="sidebar-menu-item">
          <Link href="/dashboard/about">
            <span className="sidebar-menu-item-icon">
              <LuScrollText />
            </span>
            <span className="sidebar-menu-item-text">about</span>
          </Link>
        </li>
        <li className="sidebar-menu-item">
          <Link href="/dashboard/settings">
            <span className="sidebar-menu-item-icon">
              <IoSettingsSharp />
            </span>
            <span className="sidebar-menu-item-text">settings</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
