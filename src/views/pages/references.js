import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import { gsap } from "gsap";


class ReferencesView {
  
  init(){      
    document.title = "References"  
    this.render()    
    this.setListeners()
    Utils.pageIntroAnim()  
        
  } 


  setListeners(){
    // init any evenet listeners for click, swipe, key press etc.
        
  }

  render(){
    const template = html`
      <va-app-header title="References" user=${JSON.stringify(Auth.currentUser)}></va-app-header>
      
      <div class="page-content references">
        <h1 class='anim-in'>References</h1>

        <!-- table of references grouped bp reference use case  -->
        <div class='table-wrapper'>
          <table>
            <tr>
              <th>#</th>
              <th>Source</th>
              <th>Use case</th>
            </tr>
            <tr>
              <td>1</td>
              <td><a href='https://greensock.com/docs/v3/GSAP/gsap.timeline()'>https://greensock.com/docs/v3/GSAP/gsap.timeline()</a></td>
              <td>Page element animations</td>
            </tr>
            <tr>
              <td>2</td>
              <td>"JS vanilla framework" 2021. Curtin Uni, UX3 / DIG31 2021</td>
              <td>Used as a fewference point to build on for the basic API backend/frontend structure</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Shoelace web components <a href='https://shoelace.style/'>https://shoelace.style/</a></td>
              <td>Buttons and various components.</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Google fonts CDN <a href='https://fonts.google.com/'>https://fonts.google.com/</a></td>
              <td>Headings and body fonts</td>
            </tr>
            <tr>
              <td>5</td>
              <td><a href='https://app.asana.com'>https://app.asana.com</a> </td>
              <td>Collabotation and project management</td>
            </tr>

            <tr><td>-</td></tr>

            <tr>
              <td>6</td>
              <td>“Airbus Hydrogen Aircrafts.” 2021. AIRBUS. <a href='https://www.airbus.com/en/newsroom/news/2021-01-why-hydrogen-is-the-most-promising-zero-emission-technology'>https://www.airbus.com/en/newsroom/news/2021-01-why-hydrogen-is-the-most-promising-zero-emission-technology</a>
              </td>
              <td>Image used</td>
            </tr>
            
            <tr>
              <td>7</td>
              <td>“Australian Energy Generation Renewable Sources.” 2021. Department of Industry, Science, Energy and Resources.
              <a href='https://www.energy.gov.au/data/australian-electricity-generation-renewable-sources'>https://www.energy.gov.au/data/australian-electricity-generation-renewable-sources</a>
              </td>
              <td>Image used</td>
            </tr>

            <tr>
              <td>8</td>
              <td>“Australian Electricity Generation-Fuel Mix Calendar 2020.” 2020. Department of Industry, Science, Energy and Resources.
                <a href='https://www.energy.gov.au/australian-electricity-generation-fuel-mix-2020'>https://www.energy.gov.au/australian-electricity-generation-fuel-mix-2020</a>
              </td>
              <td>Image used</td>
            </tr>

            <tr>
              <td>8</td>
              <td>“Australian Nuclear Association Logo.” ANA.
             <a href='https://www.nuclearaustralia.org.au'>https://www.nuclearaustralia.org.au</a>
              </td>
              <td>Image used</td>
            </tr>

            <tr>
              <td>9</td>
              <td>BlackBoxGuild. n.d. “Windmill eco concept. Wind turbine. Loop.” Shutterstock.
                <a href='https://www.shutterstock.com/video/clip-1029958835-windmill-eco-concept-wind-turbine-loop'>https://www.shutterstock.com/video/clip-1029958835-windmill-eco-concept-wind-turbine-loop</a>
              </td>
              <td>Image used</td>
            </tr>

            <tr>
              <td>10</td>
              <td>Butter Draws. n.d. “Lition green energy landscape.” Dribbble.
                <a href='https://dribbble.com/shots/15792229-Lition-green-energy-landscape'>https://dribbble.com/shots/15792229-Lition-green-energy-landscape</a>
              </td>
              <td>Image used</td>
            </tr>

            <tr>
              <td>11</td>
              <td>Catalyststuff. n.d.“Astronaut floating with star balloon cartoon vector icon llustration.” Freepik. 
                <a href='https://www.freepik.com/free-vector/astronaut-floating-with-star-balloon-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_16306574.htm'>https://www.freepik.com/free-vector/astronaut-floating-with-star-balloon-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_16306574.htm</a>
              </td>
              <td>Image used</td>
            </tr>

            <tr>
              <td>12</td>
              <td>Dimitrios. n.d. “Influence of the human factor to enhance the greenhouse effect.” Adobe Stock. 
                <a href=''></a>
              </td>
              <td>Image used</td>
            </tr>

            <tr>
              <td>13</td>
              <td>
                <a href='https://stock.adobe.com/uk/images/id/384883425?as_campaign=Freepik&as_content=api&as_audience=srp&tduid=46cbea33a8246e2dbdba6e4ea8217bce&as_channel=affiliate&as_campclass=redirect&as_source=arvato'>https://stock.adobe.com/uk/images/id/384883425?as_campaign=Freepik&as_content=api&as_audience=srp&tduid=46cbea33a8246e2dbdba6e4ea8217bce&as_channel=affiliate&as_campclass=redirect&as_source=arvato</a>
              </td>
              <td>Image used</td>
            </tr>

            <tr>
              <td>14</td>
              <td>“Eraring coal-fired power station in Newcastle.” 2021. CSIRO.
                <a href='https://www.csiro.au/en/research/environmental-impacts/climate-change/climate-change-qa/sources-of-ghg-gases'>https://www.csiro.au/en/research/environmental-impacts/climate-change/climate-change-qa/sources-of-ghg-gases</a>
              </td>
              <td>Image used</td>
            </tr>

            <tr>
              <td>15</td>
              <td>“Fuel Cells.” 2019. Fuel Cells Works.
                <a href='https://fuelcellsworks.com/news/argonne-and-university-of-illinois-to-form-hydrogen-fuel-cell-coalition/'>https://fuelcellsworks.com/news/argonne-and-university-of-illinois-to-form-hydrogen-fuel-cell-coalition/</a>
              </td>
              <td>Image used</td>
            </tr>

            <tr>
              <td>16</td>
              <td>Free Vector. n.d. “Tree vector.” Free Vector.
                <a href='https://www.freepik.com/free-vector/set-nine-flat-trees-green-tones_1062435.htm#query=tree&position=1&from_view=keyword'>https://www.freepik.com/free-vector/set-nine-flat-trees-green-tones_1062435.htm#query=tree&position=1&from_view=keyword</a>
              </td>
              <td>Image used</td>
            </tr>

            <tr>
              <td>17</td>
              <td>Free Vector. n.d. “Clouds Illustration.” Free Vector.
                <a href='https://www.freevector.com/clouds-illustration-19762'>https://www.freevector.com/clouds-illustration-19762</a>
              </td>
              <td>Image used</td>
            </tr>

            <tr>
              <td>18</td>
              <td>Gibustudio. n.d. “High voltage poles Free Vector.“ Vecteezy.
                <a href='https://www.vecteezy.com/vector-art/1222754-high-voltage-poles'>https://www.vecteezy.com/vector-art/1222754-high-voltage-poles</a>
              </td>
              <td>Image used</td>
            </tr>


            <tr>
              <td>19</td>
              <td>Graphic Mall. n.d. “Engineers.” Dribbble.
                <a href='https://dribbble.com/shots/15882200-Engineers'>https://dribbble.com/shots/15882200-Engineers</a>
              </td>
              <td>Image used</td>
            </tr>

            <tr>
              <td>20</td>
              <td>“Green Energy.” 2019. pngfind.
                <a href='https://www.pngfind.com/mpng/oomTRb_green-energy-png-file-renewable-resources-energy-storage/'>https://www.pngfind.com/mpng/oomTRb_green-energy-png-file-renewable-resources-energy-storage/</a>
              </td>
              <td>Image used</td>
            </tr>

            <tr>
              <td>21</td>
              <td>Macrovector. n.d. “World map with global technology or social connection network with nodes and links vector illustration.” Freepik.
                <a href='https://www.freepik.com/free-vector/world-map-with-global-technology-social-connection-network-with-nodes-links-vector-illustration_1158187.htm#query=global%20connection%20illustration&position=13&from_view=search'>https://www.freepik.com/free-vector/world-map-with-global-technology-social-connection-network-with-nodes-links-vector-illustration_1158187.htm#query=global%20connection%20illustration&position=13&from_view=search</a>
              </td>
              <td>Image used</td>
            </tr>

            <tr>
              <td>22</td>
              <td>“Mega Solar Park.” 2019. ABC News:
                <a href='https://www.abc.net.au/news/2019-04-09/has-the-shine-worn-off-solar-thermal-power/10983180'>https://www.abc.net.au/news/2019-04-09/has-the-shine-worn-off-solar-thermal-power/10983180</a>
              </td>
              <td>Image used</td>
            </tr>

            <tr>
              <td>23</td>
              <td>“Number of operable nuclear reactors worldwide as of October 2021, by country.” Statista.
                <a href='https://www.statista.com/statistics/267158/number-of-nuclear-reactors-in-operation-by-country/'>https://www.statista.com/statistics/267158/number-of-nuclear-reactors-in-operation-by-country/</a>
              </td>
              <td>Image used</td>
            </tr>

            <tr>
              <td>24</td>
              <td>“Nuclear Energy.” Office of Nuclear Energy.
                <a href='https://www.energy.gov/ne/articles/advantages-and-challenges-nuclear-energy'>https://www.energy.gov/ne/articles/advantages-and-challenges-nuclear-energy</a>
              </td>
              <td>Image used</td>
            </tr>


            <tr>
              <td>25</td>
              <td>“Nuclear Waste.” 2018. Energy Transition.
                <a href='https://energytransition.org/2018/10/radioactive-waste-disposal-in-four-words-we-do-not-know/'>https://energytransition.org/2018/10/radioactive-waste-disposal-in-four-words-we-do-not-know/</a>
              </td>
              <td>Image used</td>
            </tr>

            <tr>
              <td>26</td>
              <td>
              “Offshore Wind Turbines.” 2020. Scientific American.
                <a href='https://www.scientificamerican.com/article/longer-turbine-blades-have-slashed-wind-energy-costs/'></a>
              </td>
              <td>Image used</td>
            </tr>

            <tr>
              <td>27</td>
              <td>
              Oumousse, Nour. n.d. “Joystick icon.” Dribbble.
                <a href='https://dribbble.com/shots/14598948-Joystick-icon'>https://dribbble.com/shots/14598948-Joystick-icon</a>
              </td>
              <td>Image used</td>
            </tr>

            <tr>
              <td>28</td>
              <td>“Photovoltaic Solar Panels.” 2019. AZO Cleantech.
                <a href='https://www.azocleantech.com/article.aspx?ArticleID=980'>https://www.azocleantech.com/article.aspx?ArticleID=980</a>
              </td>
              <td>Image used</td>
            </tr>

            <tr>
              <td>29</td>
              <td>Rawpixel.com. n.d. “People with environmental sustainability concept Free Vector.” Freepik. 
                <a href='https://www.freepik.com/free-vector/people-with-environmental-sustainability-concept_3585200.htm?query=climate%20change%20%20illustration'>https://www.freepik.com/free-vector/people-with-environmental-sustainability-concept_3585200.htm?query=climate%20change%20%20illustration</a>
              </td>
              <td>Image used</td>
            </tr>

            <tr>
              <td>30</td>
              <td>Rikkyal. n.d. “Coal power plant silhouette. Vector illustration on white background.” 123RF. 
                <a href='https://www.123rf.com/photo_51687003_coal-power-plant-silhouette-vector-illustration-on-white-backgound.html'>https://www.123rf.com/photo_51687003_coal-power-plant-silhouette-vector-illustration-on-white-backgound.html</a>
              </td>
              <td>Image used</td>
            </tr>

            <tr>
              <td>31</td>
              <td>Scott. n.d. “QANTAS 787-9 premium economy review San Francisco to Melbourne.” SANspotter.
                <a href='https://www.sanspotter.com/qantas-787-premium-economy_review/'>https://www.sanspotter.com/qantas-787-premium-economy_review/</a>
              </td>
              <td>Image used</td>
            </tr>

            <tr>
              <td>32</td>
              <td>“Silverton Wind Farm.” 2020. Utility Magazine.
                <a href='https://utilitymagazine.com.au/nsw-silverton-wind-farm-now-complete-and-operational/'>https://utilitymagazine.com.au/nsw-silverton-wind-farm-now-complete-and-operational/</a>
              </td>
              <td>Image used</td>
            </tr>


            <tr>
              <td>33</td>
              <td>“The Greenhouse Effect.” 2020. Space.com.
                <a href='https://www.space.com/greenhouse-effect.html'>https://www.space.com/greenhouse-effect.html</a>
              </td>
              <td>Image used</td>
            </tr>

            <tr>
              <td>34</td>
              <td>“The Greenhouse Effect.” 2019. Youmatter.
                <a href='https://youmatter.world/en/definition/definitions-greenhouse-effect-what-is-it-definition-and-role-in-global-warming/'>https://youmatter.world/en/definition/definitions-greenhouse-effect-what-is-it-definition-and-role-in-global-warming/</a>
              </td>
              <td>Image used</td>
            </tr>

            <tr>
              <td>35</td>
              <td>Vladwel. n.d. “Carbon CO2 pollution emission cloud vector icon, dioxide smoke exhaust bubble flat symbol illustration design isolated on white background.” PIXTA. 
                <a href='https://www.pixtastock.com/illustration/66837380'>https://www.pixtastock.com/illustration/66837380</a>
              </td>
              <td>Image used</td>
            </tr>

            <tr><td>-</td></tr>

            <tr>
              <td>36</td>
              <td>Airbus n.d. “Solar flight Harvesting the sun’s rays to power aircraft.” Accesses July 20, 2021.
                <a href='https://www.airbus.com/innovation/zero-emission/solar-flight.html'>https://www.airbus.com/innovation/zero-emission/solar-flight.html</a>
              </td>
              <td>Text Reference</td>
            </tr>


            <tr>
              <td>37</td>
              <td>Australian Nuclear Association. 2018. “Nuclear Power – some facts.” ANA.
                <a href='https://www.nuclearaustralia.org.au/nuclear-power-some-facts/'>https://www.nuclearaustralia.org.au/nuclear-power-some-facts/</a>
              </td>
              <td>Text Reference</td>
            </tr>
            
            <tr>
              <td>38</td>
              <td>Climate Council. 2022. “NUCLEAR POWER STATIONS ARE NOT APPROPRIATE FOR AUSTRALIA – AND PROBABLY NEVER WILL BE.” Climate Council.
                <a href='https://www.climatecouncil.org.au/nuclear-power-stations-are-not-appropriate-for-australia-and-probably-never-will-be/'>https://www.climatecouncil.org.au/nuclear-power-stations-are-not-appropriate-for-australia-and-probably-never-will-be/</a>
              </td>
              <td>Text Reference</td>
            </tr>

            <tr>
              <td>39</td>
              <td>Climate Change, Climate Change Q&A. n.d. “What are the sources of Australia’s greenhouse gases? CSIRO. Accessed February 3, 2022.
                <a href='https://www.csiro.au/en/research/environmental-impacts/climate-change/climate-change-qa/sources-of-ghg-gases'>https://www.csiro.au/en/research/environmental-impacts/climate-change/climate-change-qa/sources-of-ghg-gases</a>
              </td>
              <td>Text Reference</td>
            </tr>

            <tr>
              <td>40</td>
              <td>Department of Energy, Energy Sources. n.d. “Fossil.” US Department of Energy. Accessed February 3, 2022.
                <a href='https://www.energy.gov/science-innovation/energy-sources/fossil'>https://www.energy.gov/science-innovation/energy-sources/fossil</a>
              </td>
              <td>Text Reference</td>
            </tr>

            <tr>
              <td>41</td>
              <td>Department of Industry, Science, Energy and Resources. n.d. “Electricity generation.” Australian Government. Accessed February 3, 2022.
                <a href='https://www.energy.gov.au/data/electricity-generation'>https://www.energy.gov.au/data/electricity-generation</a>
              </td>
              <td>Text Reference</td>
            </tr>

            <tr>
              <td>42</td>
              <td>Department of Industry, Science, Energy and Resources. n.d. “Australian electricity generation - fuel mix calendar year 2020.” Australian Government. Accessed February 3, 2022.
                <a href='https://www.energy.gov.au/australian-electricity-generation-fuel-mix-2020'>https://www.energy.gov.au/australian-electricity-generation-fuel-mix-2020</a>
              </td>
              <td>Text Reference</td>
            </tr>

            <tr>
              <td>43</td>
              <td>Department of Industry, Science, Energy and Resources. n.d. “Australian electricity generation renewable sources.” Australian Government. Accessed February 3, 2022.
                <a href='https://www.energy.gov.au/data/australian-electricity-generation-renewable-sources'>https://www.energy.gov.au/data/australian-electricity-generation-renewable-sources</a>
              </td>
              <td>Text Reference</td>
            </tr>

            <tr>
              <td>44</td>
              <td>Earth Science Communications Team. 2021. “Climate Kids.” NASA’S JPL. 
                <a href='https://climatekids.nasa.gov/greenhouse-effect/'>https://climatekids.nasa.gov/greenhouse-effect/</a>
              </td>
              <td>Text Reference</td>
            </tr>

            <tr>
              <td>45</td>
              <td>Energy Efficiency and Renewable Energy, Alternative Fuels Data Center. n.d. “Fuel Cell Electric Vehicles.” Accessed February 6, 2022. 
                <a href='https://afdc.energy.gov/vehicles/fuel_cell.html#:~:text=Fuel%20cell%20electric%20vehicles%20(FCEVs,the%20early%20stages%20of%20implementation.'>https://afdc.energy.gov/vehicles/fuel_cell.html#:~:text=Fuel%20cell%20electric%20vehicles%20(FCEVs,the%20early%20stages%20of%20implementation.</a>
              </td>
              <td>Text Reference</td>
            </tr>

            <tr>
              <td>46</td>
              <td>Henderson, Caspar. 2021. “The Hydrogen Revolution in the Skies.” BBC.
                <a href='https://www.bbc.com/future/article/20210401-the-worlds-first-commercial-hydrogen-plane'>https://www.bbc.com/future/article/20210401-the-worlds-first-commercial-hydrogen-plane</a>
              </td>
              <td>Text Reference</td>
            </tr>

            <tr>
              <td>47</td>
              <td>Independent Statistics and Analysis. n.d. “Nuclear Explained, Nuclear Power Plants.” US Energy Information Administration. Accessed February 7, 2022. 
                <a href='https://www.eia.gov/energyexplained/nuclear/nuclear-power-plants.php'>https://www.eia.gov/energyexplained/nuclear/nuclear-power-plants.php</a>
              </td>
              <td>Text Reference</td>
            </tr>

            <tr>
              <td>48</td>
              <td>Khandelwal Bhupendra, Adam Karakurt, Paulas R. Sekaran, Vishal Sethi and Riti Singh. 2013. “Hydrogen powered aircraft : The future of air transport.” Progress in Aerospace Sciences (forthcoming). 
                <a href='https://www.sciencedirect.com/science/article/pii/S0376042112000887'>https://www.sciencedirect.com/science/article/pii/S0376042112000887</a>
              </td>
              <td>Text Reference</td>
            </tr>

            <tr>
              <td>49</td>
              <td>Office of Energy Efficiency and Renewable Energy, Hydrogen and Fuel Cell Technology Office. n.d. “Fuel Cells.” US Department of Energy. Accessed February 6, 2022.
                <a href='https://www.energy.gov/eere/fuelcells/fuel-cells'>https://www.energy.gov/eere/fuelcells/fuel-cells</a>
              </td>
              <td>Text Reference</td>
            </tr>

            <tr>
              <td>50</td>
              <td>Office of Energy Efficiency and Renewable Energy, Wind Energy Technology Office. n.d. “How Do Wind Turbines Work?” US Department of Energy. Accessed January 17, 2022.
                <a href='https://www.energy.gov/eere/wind/how-do-wind-turbines-work'>https://www.energy.gov/eere/wind/how-do-wind-turbines-work</a>
              </td>
              <td>Text Reference</td>
            </tr>

            <tr>
              <td>51</td>
              <td>Office of Energy Efficiency and Renewable Energy, Wind Energy Technology Office. n.d. “Advantages and Challenges of Wind Energy” US Department of Energy. Accessed January 17, 2022.
                <a href='https://www.energy.gov/eere/wind/advantages-and-challenges-wind-energy'>https://www.energy.gov/eere/wind/advantages-and-challenges-wind-energy</a>
              </td>
              <td>Text Reference</td>
            </tr>

            <tr>
              <td>52</td>
              <td>Office of Energy Efficiency and Renewable Energy, Solar Energy Technology Office. n.d. “How Does Solar Work” US Department of Energy. Accessed January 31, 2022.
                <a href='https://www.energy.gov/eere/solar/how-does-solar-work'>https://www.energy.gov/eere/solar/how-does-solar-work</a>
              </td>
              <td>Text Reference</td>
            </tr>

            <tr>
              <td>53</td>
              <td>Office of Nuclear Energy. 2021. “Advantages and Challenges of Nuclear Energy.” US Department of Energy. 
                <a href='https://www.energy.gov/ne/articles/advantages-and-challenges-nuclear-energy'>https://www.energy.gov/ne/articles/advantages-and-challenges-nuclear-energy</a>
              </td>
              <td>Text Reference</td>
            </tr>

            <tr>
              <td>54</td>
              <td>Office of Nuclear Energy. 2021. “3 Reasons Why Nuclear is Clean and Sustainable.” US Department of Energy. 
                <a href='https://www.energy.gov/ne/articles/3-reasons-why-nuclear-clean-and-sustainable'></a>
              </td>
              <td>Text Reference</td>
            </tr>

            <tr>
              <td>55</td>
              <td>Renewable Energy. “Solar Energy.” ARENA Australia. Accessed January 31, 2022.
                <a href='https://arena.gov.au/renewable-energy/solar/'>https://arena.gov.au/renewable-energy/solar/</a>
              </td>
              <td>Text Reference</td>
            </tr>

            <tr>
              <td>56</td>
              <td>Renewable Energy. “Hydrogen Solutions.” General Electrics. Accessed February 6, 2022. 
                <a href='https://www.ge.com/renewableenergy/hydrogen-solutions'>https://www.ge.com/renewableenergy/hydrogen-solutions</a>
              </td>
              <td>Text Reference</td>
            </tr>

            <tr><td>-</td></tr>

            <tr>
              <td>57</td>
              <td> 
                The idea, information, and data of the “Power Supply Game” are mainly adopted from the Power Supply Simulation by Dr Martin Draganski, provided in Unit: Energy and Earth’s Environment (PHYS 2119) at RMIT.
              </td>
              <td>Game concept</td>
            </tr>

          </table> 
        </div>
      </div>
      <app-footer></app-footer>

    `
    render(template, App.rootEl)
  }

}

export default new ReferencesView()