/** Component Imports */
import Example from './components/Example'
import plant from "../images/drawers.jpg"
import avatar from "../images/avatar-michelle.jpg"
import iconshare from "../images/icon-share.svg"

/**
 * This is the entry point for your react-app
 *  1. We strongly recommend comparmentalizing your code into Components
 *  2. We strongly recommend putting those within the /components folder
 *  3. We strongly recommend using a modular-approach to CSS:
 *    - An example has been provided for you, see the 'Example' component
 *    - The 'Example.jsx' component comes with an 'Example.module.css'
 *    - Pay attention to variable file import (gives access to CSS variables)
 *    - Pay special attention to how we apply the className from the imported 'styles' 
 */

const App = () => {
  return (
    <div>
   
    <div className="article-preview-container">
      <div className="article-img-container">
        <img className="drawers-img" src={plant} alt="Green drawers" />
      </div> 
      <div className="article-content-container">
        <h1 className="main-heading">
          Shift the overall look and feel by adding these wonderful touches to furniture in your
          home
        </h1>
        <p className="preview-text">
          Ever been in a room and felt like something was missing? Perhaps it felt slightly bare
          and uninviting. I’ve got some simple tips to help you make any room feel complete.
        </p>
        <div className="author-info">
          <div className="date-name-avatar-container">
            <img className="author-avatar-img" src={avatar} alt="Michelle" />
            <div className="name-date-container">
              <h4 className="author-name">Michelle Appleton</h4>
              <p className="preview-text">28 Jun 2020</p>
            </div>

            <div id="desktop-share-btn" className="share-btn-container">
              <img src={iconshare} alt="share button"></img>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default App;