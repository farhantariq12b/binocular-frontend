function FullCard() {
    return <div>
    
    <div className="b-modal b-small-modal">
      <div className="b-modal-content">
        <div className="b-modal-header">
          <div className="b-modal-icon">
            <img src="modal-cross.svg"></img>
          </div>
        </div>
        <div className="b-modal-body b-small-w">
          <div className="b-modal-body-content">
            <div className="b-modal-tageline">
              <p>What season are we going to create a box line plan for?</p>
            </div>
            <div className="b-modal-btn">
            <div className="dropdown-widget">
              <button className="full-w">Season (All)</button>
              <ul className="dropdown-widget-list">
                <li>Season 1</li>
                <li>Season 2</li>
                <li>Season 3</li>
                <li>Season 4</li>
              </ul>
            </div>
              <button className="bg-c-danger c-white">Choose</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
}