import React from "react";
import "./paperdoll.css";

function CharacterSheet() {
  return (
    
    <div className="container">
      <div className="row pt-4">
        {/* <div className="col-2">1 of 3</div> */}
        <div className="col-lg-8 col-md-12 text-white text-sm">
        <h2 className="text-center">Character Sheet</h2>
          {/* Start Paperdoll Header */}
          <div className="inventoryPanelControls">
            <div className="headerLabel">Inventory</div>
            {/* <div className="refreshButton">
           <div className="refreshButtonIcon"></div>
          </div> */}
            <div className="inventoryPanelButton inventory left selected"></div>
            <div className="inventoryPanelButton cosmetic right"></div>
          </div>
          {/* start paperdoll structure */}
          <div className="activePanel">
            <div className="mainInventoryPanel">
              <div
                className="weaponSwap1 left"
                style={{
                  display: "block",
                }}
              />
              <div
                className="weaponSwap2 left"
                style={{
                  display: "none",
                }}
              />
              <div
                className="weaponSwap1 right"
                style={{
                  display: "block",
                }}
              />
              <div
                className="weaponSwap2 right"
                style={{
                  display: "none",
                }}
              />

              {/* Weapon Swap Mini - Left */}
              <div
                className="weaponSwapMini left"
                style={{
                  display: "block",
                }}
              >
                <div className="miniIconContainer">
                  <img
                    src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjYiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/5dcee0019c/Dagger6.png"
                    alt="Weapon Swap Mini - Left"
                    style={{
                      width: "17.3287px",
                      height: "51.75px",
                      top: "14.625px",
                      left: "14.8356px",
                    }}
                  />
                </div>
              </div>

              {/* Weapon Swap Mini - Right */}
              <div
                className="weaponSwapMini right"
                style={{
                  display: "block",
                }}
              >
                <div className="miniIconContainer">
                  <img
                    src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjUiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/3431875aaf/Dagger5.png"
                    alt="Weapon Swap Mini - Right"
                    style={{
                      width: "17.3287px",
                      height: "51.75px",
                      top: "14.625px",
                      left: "14.8356px",
                    }}
                  />
                </div>
              </div>
              <button
                className="inventoryExpansionToggle"
                style={{
                  display: "none",
                }}
              />
              <div
                className="inventoryExpansion"
                style={{
                  display: "none",
                }}
              />

              {/* Start Paperdoll */}
              {/* Boot Slot */}
              <div
                className="newItemContainer iW2 iH2 itemRendered itemPlaced ipW2 ipH2"
                style={{
                  position: "absolute",
                  left: "368.89px",
                  top: "312.63px",
                }}
              >
                <div className="socketPopups" />
                <div className="iconContainer">
                  <div className="icon ">
                    <img
                      src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0ludDQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MSwic2VhcmluZyI6dHJ1ZSwidGFuZ2xlZCI6dHJ1ZX1d/dc1652810d/BootsInt4.png"
                      alt="Boot Slot"
                    />
                    <div className="sockets numSockets4">
                      <div className="socketLink socketLink0" />
                      <div className="socket socketInt socketed intGem"></div>
                      <div className="socketLink socketLink1" />
                      <div className="socket socketInt socketed socketSupport intGem"></div>
                      <div className="socketLink socketLink2" />
                      <div className="socket socketInt socketRight socketed intGem"></div>
                      <div className="socket socketInt socketRight socketed intGem"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/*Chest Armor Slot */}
              <div
                className="newItemContainer iW2 iH3 itemRendered itemPlaced ipW2 ipH3"
                style={{
                  position: "absolute",
                  left: "252.06px",
                  top: "206.14px",
                }}
              >
                <div className="socketPopups" />
                <div className="iconContainer">
                  <div className="icon ">
                    <img
                      src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5SW50MUNVbmlxdWUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/4f3e22a163/BodyInt1CUnique.png"
                      alt="Chest Armor Slot"
                    />
                    <div className="sockets numSockets6">
                      <div className="socketLink socketLink0" />
                      <div className="socket socketStr socketed socketSupport strGem"></div>
                      <div className="socketLink socketLink1" />
                      <div className="socket socketInt socketed socketSupport intGem"></div>
                      <div className="socketLink socketLink2" />
                      <div className="socket socketInt socketRight socketed socketSupport intGem"></div>
                      <div className="socketLink socketLink3" />
                      <div className="socket socketDex socketRight socketed dexGem"></div>
                      <div className="socketLink socketLink4" />
                      <div className="socket socketInt socketed intGem"></div>
                      <div className="socket socketDex socketed socketSupport dexGem"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Flask Slot 2 */}
              <div
                className="newItemContainer iW1 iH2 itemRendered itemPlaced ipW1 ipH2"
                style={{
                  position: "absolute",
                  left: "233.805px",
                  top: "418.51px",
                }}
              >
                <div className="socketPopups" />
                <div className="iconContainer">
                  <div className="icon ">
                    <img
                      src="https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvQm90dGxlZFB1cml0eSIsInciOjEsImgiOjIsInNjYWxlIjoxLCJsZXZlbCI6MSwiZnMiOnRydWV9XQ/0b53a73e4b/BottledPurity.png"
                      alt="Flask Slot 2"
                    />
                    <div className="sockets numSockets0"></div>
                  </div>
                </div>
              </div>

              {/* Helmet Slot */}
              <div
                className="newItemContainer iW2 iH2 itemRendered itemPlaced ipW2 ipH2"
                style={{
                  position: "absolute",
                  left: "252.06px",
                  top: "99.65px",
                }}
              >
                <div className="socketPopups" />
                <div className="iconContainer">
                  <div className="icon ">
                    <img
                      src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0Nyb3duT2ZUaGVJbndhcmRFeWUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/fdb20856e4/CrownOfTheInwardEye.png"
                      alt="Helmet Slot"
                    />
                    <div className="sockets numSockets4">
                      <div className="socketLink socketLink0" />
                      <div className="socket socketDex socketed dexGem"></div>
                      <div className="socketLink socketLink1" />
                      <div className="socket socketDex socketed dexGem"></div>
                      <div className="socketLink socketLink2" />
                      <div className="socket socketStr socketRight socketed socketSupport strGem"></div>
                      <div className="socket socketStr socketRight socketed strGem"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Flask Slot 5 */}
              <div
                className="newItemContainer iW1 iH2 itemRendered itemPlaced ipW1 ipH2"
                style={{
                  position: "absolute",
                  left: "376.198px",
                  top: "418.51px",
                }}
              >
                <div className="socketPopups" />
                <div className="iconContainer">
                  <div className="icon ">
                    <img
                      src="https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvbWFuYWZsYXNrMTIiLCJ3IjoxLCJoIjoyLCJzY2FsZSI6MSwibGV2ZWwiOjF9XQ/6146902646/manaflask12.png"
                      alt="Flask Slot 5"
                    />
                    <div className="sockets numSockets0"></div>
                  </div>
                </div>
              </div>

              {/* Amulet Slot */}
              <div
                className="newItemContainer iW1 iH1 itemRendered itemPlaced ipW1 ipH1"
                style={{
                  position: "absolute",
                  left: "368.89px",
                  top: "194.58px",
                }}
              >
                <div className="socketPopups" />
                <div className="iconContainer">
                  <div className="icon ">
                    <img
                      src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9QcmVzZW5jZU9mQ2hheXVsYSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/6460da7c94/PresenceOfChayula.png"
                      alt="Amulet Slot"
                    />
                    <div className="sockets numSockets0"></div>
                  </div>
                </div>
              </div>

              {/* Flask Slot 3 */}
              <div
                className="newItemContainer iW1 iH2 itemRendered itemPlaced ipW1 ipH2"
                style={{
                  position: "absolute",
                  left: "281.269px",
                  top: "418.51px",
                }}
              >
                <div className="socketPopups" />
                <div className="iconContainer">
                  <div className="icon ">
                    <img
                      src="https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvVmlhbG9mVW5saWZlIiwidyI6MSwiaCI6Miwic2NhbGUiOjEsImxldmVsIjoxfV0/9911226887/VialofUnlife.png"
                      alt="Flask Slot 3"
                    />
                    <div className="sockets numSockets0"></div>
                  </div>
                </div>
              </div>

              {/* Belt Slot */}
              <div
                className="newItemContainer iW2 iH1 itemRendered itemPlaced ipW2 ipH1"
                style={{
                  position: "absolute",
                  left: "252.06px",
                  top: "360.09px",
                }}
              >
                <div className="socketPopups" />
                <div className="iconContainer">
                  <div className="icon ">
                    <img
                      src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQ3J5c3RhbEJlbHQiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/1e9174ec8f/CrystalBelt.png"
                      alt="Belt Slot"
                    />
                    <div className="sockets numSockets0"></div>
                  </div>
                </div>
              </div>

              {/* Weapon Slot 1 - Left */}
              <div
                className="newItemContainer iW1 iH4 itemRendered itemPlaced ipW2 ipH4"
                style={{
                  position: "absolute",
                  left: "65.85px",
                  top: "111.21px",
                }}
              >
                <div className="socketPopups" />
                <div className="iconContainer">
                  <div className="icon ">
                    <img
                      src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL0Nvc3ByaXNNYWxpY2UiLCJ3IjoxLCJoIjo0LCJzY2FsZSI6MX1d/e9e517220b/CosprisMalice.png"
                      alt="Weapon Slot 1 - Left"
                    />
                    <div
                      className="sockets numSockets3"
                      style={{
                        display: "none",
                      }}
                    >
                      <div className="socketLink socketLink0" />
                      <div className="socket socketInt socketed intGem"></div>
                      <div className="socketLink socketLink1" />
                      <div className="socket socketInt socketed intGem"></div>
                      <div className="socket socketInt socketRight socketed intGem"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Flask Slot 4 */}
              <div
                className="newItemContainer iW1 iH2 itemRendered itemPlaced ipW1 ipH2"
                style={{
                  position: "absolute",
                  left: "328.734px",
                  top: "418.51px",
                }}
              >
                <div className="socketPopups" />
                <div className="iconContainer">
                  <div className="icon ">
                    <img
                      src="https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3Mvc3ByaW50IiwidyI6MSwiaCI6Miwic2NhbGUiOjEsImxldmVsIjoxLCJmcyI6dHJ1ZX1d/e0bf74a30f/sprint.png"
                      alt="Flask Slot 4"
                    />
                    <div className="sockets numSockets0"></div>
                  </div>
                </div>
              </div>

              {/* Weapon Swapped ??? TODO: Figure out which slot and leave this code for potential weapon swap functionality */}
              {/* <div
            className="newItemContainer iW1 iH3 itemRendered itemPlaced ipW2 ipH4"
            style={{
            position: "absolute",
            left: "438.27px",
            top: "111.21px",
            display: "none",
            }}
            >
            <div className="socketPopups" />
            <div className="iconContainer">
            <div className="icon ">
            <img
             src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjUiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/3431875aaf/Dagger5.png"
             alt
            />
            <div className="sockets numSockets3">
             <div className="socketLink socketLink0" />
             <div className="socket socketInt"></div>
             <div className="socketLink socketLink1" />
             <div className="socket socketDex socketed socketSupport dexGem"></div>
             <div className="socket socketInt socketRight socketed socketSupport intGem"></div>
            </div>
            </div>
            </div>
            </div> */}

              {/* Flask Slot 1 */}
              <div
                className="newItemContainer iW1 iH2 itemRendered itemPlaced ipW1 ipH2"
                style={{
                  position: "absolute",
                  left: "186.34px",
                  top: "418.51px",
                }}
              >
                <div className="socketPopups" />
                <div className="iconContainer">
                  <div className="icon ">
                    <img
                      src="https://web.poecdn.com/gen/image/WzksMTQseyJmIjoiMkRJdGVtcy9GbGFza3MvbGlmZWZsYXNrMTIiLCJ3IjoxLCJoIjoyLCJzY2FsZSI6MSwibGV2ZWwiOjF9XQ/7be2c09015/lifeflask12.png"
                      alt="Flask Slot 1"
                    />
                    <div className="sockets numSockets0"></div>
                  </div>
                </div>
              </div>

              {/* Left Ring Slot */}
              <div
                className="newItemContainer iW1 iH1 itemRendered itemPlaced ipW1 ipH1"
                style={{
                  position: "absolute",
                  left: "182.69px",
                  top: "253.6px",
                }}
              >
                <div className="socketPopups" />
                <div className="iconContainer">
                  <div className="icon ">
                    <img
                      src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvVG9wYXpTYXBwaGlyZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/0c211c12b4/TopazSapphire.png"
                      alt="Left Ring Slot"
                    />
                    <div className="sockets numSockets0"></div>
                  </div>
                </div>
              </div>

              {/* Right Ring Slot */}
              <div
                className="newItemContainer iW1 iH1 itemRendered itemPlaced ipW1 ipH1"
                style={{
                  position: "absolute",
                  left: "368.89px",
                  top: "253.6px",
                }}
              >
                <div className="socketPopups" />
                <div className="iconContainer">
                  <div className="icon ">
                    <img
                      src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvVG9wYXpTYXBwaGlyZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/0c211c12b4/TopazSapphire.png"
                      alt="Right Ring Slot"
                    />
                    <div className="sockets numSockets0"></div>
                  </div>
                </div>
              </div>

              <div
                className="newItemContainer iW1 iH3 itemRendered itemPlaced ipW2 ipH4"
                style={{
                  position: "absolute",
                  left: "65.85px",
                  top: "111.21px",
                  display: "none",
                }}
              >
                <div className="socketPopups" />

                {/* Weapon Swap 2 */}
                {/* <div className="iconContainer">
              <div className="icon ">
              <img
              src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjYiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/5dcee0019c/Dagger6.png"
              alt="Weapon Swap 2"
              />
              <div className="sockets numSockets3">
              <div className="socketLink socketLink0" />
              <div className="socket socketDex socketed socketSupport dexGem"></div>
              <div className="socketLink socketLink1" />
              <div className="socket socketDex socketed socketSupport dexGem"></div>
              <div className="socket socketInt socketRight socketed intGem"></div>
              </div>
              </div>
              </div> */}
              </div>
              {/* Gloves Slot*/}
              <div
                className="newItemContainer iW2 iH2 itemRendered itemPlaced ipW2 ipH2"
                style={{
                  position: "absolute",
                  left: "135.22px",
                  top: "312.63px",
                }}
              >
                <div className="socketPopups" />
                <div className="iconContainer">
                  <div className="icon ">
                    <img
                      src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzSW50MyIsInciOjIsImgiOjIsInNjYWxlIjoxLCJzZWFyaW5nIjp0cnVlLCJ0YW5nbGVkIjp0cnVlfV0/f12b1185ef/GlovesInt3.png"
                      alt="Gloves Slot"
                    />
                    <div className="sockets numSockets4">
                      <div className="socketLink socketLink0" />
                      <div className="socket socketInt socketed socketSupport intGem"></div>
                      <div className="socketLink socketLink1" />
                      <div className="socket socketInt socketed intGem"></div>
                      <div className="socketLink socketLink2" />
                      <div className="socket socketInt socketRight socketed socketSupport intGem"></div>
                      <div className="socket socketInt socketRight socketed intGem"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Weapon/Shield/Offhand Slot - Right */}
              <div
                className="newItemContainer iW2 iH3 itemRendered itemPlaced ipW2 ipH4"
                style={{
                  position: "absolute",
                  left: "438.27px",
                  top: "111.21px",
                }}
              >
                <div className="socketPopups" />
                <div className="iconContainer">
                  <div className="icon ">
                    <img
                      src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1RoZUNvcnVuZHVtIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/f9ca50a663/TheCorundum.png"
                      alt="Weapon/Shield/Offhand Slot - Right"
                    />
                    <div className="sockets numSockets3">
                      <div className="socketLink socketLink0" />
                      <div className="socket socketDex socketed dexGem"></div>
                      <div className="socketLink socketLink1" />
                      <div className="socket socketInt socketed intGem"></div>
                      <div className="socket socketInt socketRight socketed intGem"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 text-white text-sm mb-4">
          <h2 className="text-center">Stats Panel</h2>
          <div className="stats-side-panel">
            {/* STATS WILL BE POPULATED HERE */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterSheet;
