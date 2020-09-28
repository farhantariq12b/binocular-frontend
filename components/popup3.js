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
              <p>Do you want to select carryover SKUs from our suggested list?</p>
            </div>
            <div className="b-modal-btn">
              <button className="bg-c-danger c-white">Yes</button>
              <button className="bg-c-light-black c-white">No, i’ll do it myself</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
}