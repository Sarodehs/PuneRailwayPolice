import React, { useState } from 'react';
import Header from './Header'
import Footer from './Footer'

const CitizenCorner = () => {

    const [activeInfo, setActiveInfo] = useState(null);



    const toggleInfo = (infoName) => {
      setActiveInfo(infoName === activeInfo ? null : infoName);
    };
  
  
  return (
    <div>
        <Header/>
  
        <div className="fixed-button-container">
        <div
          className="button-row"
          style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}
        >
          <div style={{ padding: '10px' }}>
            <div>
              <input
                type="checkbox"
                className="btn-check p-3"
                id="btn-check1"
                autoComplete="off"
                onClick={() => toggleInfo('reportCrime')}
              />
              <label className="btn btn-primary" htmlFor="btn-check1">
                <span>How to Report Crime</span>
              </label>
            </div>
          </div>
          <div style={{ padding: '10px' }}>
            <input
              type="checkbox"
              className="btn-check p-3"
              id="btn-check2"
              autoComplete="off"
              onClick={() => toggleInfo('tipsForSafety')}
            />

            <label className="btn btn-primary" htmlFor="btn-check2">
              <span>Tips For Safety</span>
            </label>
          </div>
          <div style={{ padding: '10px' }}>
            <input
              type="checkbox"
              className="btn-check p-3"
              id="btn-check3"
              autoComplete="off"
              onClick={() => toggleInfo('mobileSafety')}
            />
            <label className="btn btn-primary" htmlFor="btn-check3">
              <span>Mobile Safety</span>
            </label>
          </div>
        </div>
      </div>

      <div className='d-flex justify-content-center pt-5 '>
        <div className="Button Container" style={{ padding: '10px', display: 'flex' }}>
          <div style={{ marginRight: '70px', padding: '10px' }}>
            {activeInfo === 'reportCrime' && (
              <div>
                <h3>Information for How to Report Crime:</h3>
                <table className="info-table">
                  <tbody>
                    <tr>
                      <th>Sr No</th>
                      <th>Information</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>
                        Any complainant can approach personally to any Police
                        Station or lodge his complaint/ F.I.R. by Pos
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Complainant can give a written complaint or verbal complaint to register an F.I.R.</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>FIR / complaint can be lodged on the basis of a Letter or e-mail mentioning full detail regarding the complaint.</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>If a crime occurred in a running Train, complainant can give his complaint at any Police Station where the train stops respective of jurisdiction, or to On Duty T.T.E. available in the running train and obtain a (complaint) T.T.E. form copy.</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Any Person aggrieved by refusal on the part of the officer In-Charge of a Police Station to lodge the complaint/ F.I.R. the same can be sent in writing by post to the Superintendent of Police Railways, Pune.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
            {activeInfo === 'tipsForSafety' && (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginRight: '70px', padding: '10px' }}>
              <h3 style={{ textAlign: 'left' }}>Search the Place</h3>
              <p  style={{ textAlign: 'left' }}>On boarding the train before occupying a seat/berth, confirm that no suspicious article or unclaimed luggage is lying there. If any abandoned/unclaimed article is noticed, please inform the Police/Railway authorities immediately and place the picture next to it.
              </p>
              </div>

              <div style={{ marginRight: '70px', padding: '10px' }}>
      <h3 style={{ textAlign: 'left' }}>Beware of Explosives:</h3>
      <p style={{ textAlign: 'left' }}>
        Public should not touch unclaimed articles like Toys, Bags, Suitcases, Radios/Transistors, Tiffin Boxes, Mobile Phones, etc., which could be an explosive. Do not panic; inform the nearest police official/Railway official.
      </p>
    </div>
    <div style={{ marginRight: '70px', padding: '10px' }}>
      <h3 style={{ textAlign: 'left' }}>Beware of Unknown Person</h3>
      <p style={{ textAlign: 'left' }}>
        Do not accept any eatable e.g. Biscuit, Samosa, Bread, Ladoo, “Namkin”, Tea, Coffee, Milk, Cold Drink, Water & also “Parsad” from any unknown person / passenger. It may contain stupefying or poisonous substance to make you unconscious. Before offering such things these unknown persons act to become over friendly & insist upon to eat there offered eatables & shall loot precious property after making unconscious.
      </p>
    </div>
    <div style={{ marginRight: '70px', padding: '10px' }}>
      <h3 style={{ textAlign: 'left' }}>Beware of Criminals</h3>
      <p style={{ textAlign: 'left' }}>
        Beware of pick-pocket, cut-pocket, chain-snatchers. Such criminals often commit offences in crowded places.
      </p>
    </div>
    <div style={{ marginRight: '70px', padding: '10px' }}>
      <h3 style={{ textAlign: 'left' }}>Precaution During Journey</h3>
      <p style={{ textAlign: 'left' }}>
        While on the journey, trust only the authorized vendors & authorized kulis.
      </p>
    </div>
    <div style={{ marginRight: '70px', padding: '10px' }}>
      <h3 style={{ textAlign: 'left' }}>Safety of Luggage</h3>
      <p style={{ textAlign: 'left' }}>
        Do not trust unknown persons to look after your luggage or articles. Also, do not respond to unknown persons who ask you to keep their luggage with you.
      </p>
              </div>
              </div>
            )}
          <div style={{ padding: '10px',whiteSpace:'pre-wrap' }}>
            {activeInfo === 'mobileSafety' && (
              <ul style={{textAlign:'left'}}>
              <li>
              &nbsp;&nbsp;Every day cases are reported to the police where mobile phones have been stolen or have been snatched. Mobile phone snatchers typically target women or senior citizens, as they are less likely to put up resist. Cyber Cell advises you to adopt some basic steps to reduce the risk of you becoming a victim of mobile phone theft.
              </li>
              <li>
              &nbsp;&nbsp;Do not leave your phone in an unattended state while traveling in the train. Do not talk on mobile phone near the door of the compartment as there is a possibility of snatching.
              </li>
              <li>
              &nbsp;&nbsp;Generally, make it a habit to keep your phone with you at all times and never leave it unattended.
              </li>
              <li>
              &nbsp;&nbsp;Make a note of the 15-digit IMEI number, which is a unique identifier for the phone. You can get this by dialing *#06# (star hash 06 hash) from your mobile phone and it will display a 15-digit number. The IMEI number may also be found behind the battery on some phones. This number will help to track your mobile set on theft.
              </li>
              <li>
              &nbsp;&nbsp;Properly mark your phone and battery with your name and address using a permanent security marker pen for instant identification.
              </li>
              <li>
              &nbsp;&nbsp;If your mobile phone is stolen, it is important to contact the police and your service provider as soon as possible. The service provider should be instructed to immediately block the SIM card. You can help the police by giving them these details: Phone (SIM card) number, IMEI number, and other details required.
              </li>
            </ul>
            )}
          </div>
        </div>
      </div>

        <Footer/>
    </div>
  )
}

export default CitizenCorner