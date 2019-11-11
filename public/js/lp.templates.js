const lp = {
    allowOnlySingleExtendedTeamPanel: false
}

Templator.New({
    name: 'lpNav',
    observe: '#header',
    render: props => {
        return (html`
              <div .header-nav-btn ?id="${props._id}">
                  <a ?href="${props.link}">
                      <div><div class="header-nav-btn-content" >${props.children}</div></div>
                  </a>
                  <div class="header-nav-btn-underline"></div>
              </div>
          `)
    }
})

Templator.New({
    name: 'lpCornerBox',
    observe: 'body',
    render: props => {
        return (html`
              <div INHERIT_NAME >
                  <div #pointer-events="none" .no-select #height="32px">
                      <img .crnr-tl src="./media/images/corner.png" />
                      <img .crnr-tr src="./media/images/corner.png" />
                  </div>
                  <div .content >${props.children}</div>
                  <div #pointer-events="none" .no-select #height="32px">
                      <img .crnr-bl src="./media/images/corner.png" />
                      <img .crnr-br src="./media/images/corner.png" />
                  </div>
              </div>
          `)
    }
})

Templator.New({
    name: 'lpButton',
    observe: 'body',
    render: props => {
        return (html`
              <div INHERIT_NAME ><a href="${props.link}"><span>${props.children}</span></a></div>
          `)
    }
})

Templator.New({
    name: 'lpTitle',
    observe: 'body',
    render: props => {
        return (html`
              <div INHERIT_NAME #user-select="none" #text-align="center" #font-weight="600" #font-size="58px" #margin-bottom="0.2em"><span>${props.children}</span></div>
          `)
    }
})

Templator.New({
    name: 'lpPost',
    observe: 'body',
    render: props => {
        return (html`
              <div INHERIT_NAME #margin-bottom="5px"><a ?href=${props.link}><div>
                  <div .title>${props.title}</div>
                  <div .content>${props.children}</div>
              </div></a></div>
          `)
    }
})

Templator.New({
    name: 'lpButton2',
    observe: 'body',
    render: props => {
        if (props.disabled != null) {
            return (html`
                  <a #font-size="19px"  #text-decoration="none" #color="white" target="blank" ><div #cursor="default" #background="gray" INHERIT_NAME #margin="0 auto" #margin-top="5px " #overflow-x=""><span #background-color="gray" #max-width="80%"> ${props.children}</span></div></a>
              `)
        }

        return (html`
              <a #font-size="19px" #text-decoration="none" #color="white" target="blank" !href="${props.link}"><div INHERIT_NAME #margin="0 auto" #margin-top="5px " #overflow-x=""><span #max-width="80%"> ${props.children}</span></div></a>
          `)
    }
})

Templator.New({
    name: 'lpStream',
    observe: 'body',
    render: props => {
        return (html`
              <div #margin="0 auto"  #width="96%">
                  <lpTitle>STREAM</lpTitle>
  
                  <div #overflow-x="hidden" #text-align="center">
                      <iframe
                          id="streamIframe"
                          src="https://player.twitch.tv/?channel=scvlanparty"
                          frameborder="0"
                          allowfullscreen="true"
                          scrolling="no"
                          
                          #width="96%"
                          #max-width="800px"
                          #height="50vh"
                          #min-height="300px"
                          #max-height="500px"
                          #background-color="black"
                          #margin="0 auto">
                      </iframe>
                  </div>
              </div>
          `)
    }
})

const ToggleResponsiveMenuNav = () => {
    let elem = document.getElementById('responsiveHeader_Menu');
    if (elem) {
        elem.toggleAttribute('show');
    }
}
Templator.New({
    name: 'lpResponsiveLogo',
    observe: 'body',
    render: props => {
        return (html`
              <div #text-align="center" #height="100%" >
                  <a>
                      <div onClick="ToggleResponsiveMenuNav()"  #padding-right="1em" #float="right" #display="inline-block" #position="absolute"  #padding-right="0.8em"  #right="0" #height="100%" #width="3em">
                          <div #transform="scale(0.6)"  .menu #height="100%" #width="3em"></div>
                      </div> 
                  </a>
  
                  <a href="/">
                      <div INHERIT_NAME #display="inline-block"  #margin="0 auto" .logo #width="4em" #height="100%"></div>
                  </a>
              </div>
          `)
    }
})

Templator.New({
    name: 'lpMenu',
    observe: 'body',
    render: props => {
        return (html`
              <div #float="right" #height="100%">
                  <div INHERIT_NAME #display="inline-block"  #margin="auto 0" .menu #width="4em" #height="100%"></div>
              </div>
          `)
    }
})

Templator.New({
    name: 'lpFancyButton',
    observe: 'body',
    render: props => {
        return (html`
              <div #display="inline-block" #padding="6px 12px" #border="1px solid black" INHERIT_NAME #position="relative">
                  <a href="ww">
                  <div .clippedBg></div>
                      <div>${props.children}</div>
                  </a>
              </div>
          `)
    }
})

Templator.New({
    name: 'lpSep',
    observe: 'body',
    render: props => {
        return html`
              <div #margin="1em 0" #background-color="black" #height="1px"></div>
          `
    }
})

Templator.New({
    name: 'lpResMenuNav',
    observe: 'body',
    render: props => {
        return html`
              <a  ?href="${props.link}"><div  #padding="15px 0" #text-align="center" >${props.children}</div></a>
          `
    }
})

Templator.New({
    name: 'lpSocialsBar',
    observe: 'body',
    render: props => {
        return html`
              <div #display="flex" #justify-content="center" #align-content="center" #align-items="center" >
                  <lpSocialLink
                      name="facebook"
                      link="https://www.facebook.com/scvlanparty/"
                  ></lpSocialLink>
  
                  <lpSocialLink
                      name="twitter"
                      link="https://twitter.com/LanScv"
                  ></lpSocialLink>
  
                  <lpSocialLink
                      name="discord"
                      link="https://discord.gg/CwpWQCC"
                  ></lpSocialLink>
  
                  <lpSocialLink
                      name="twitch"
                      link="https://twitch.tv/scvlanparty"
                  ></lpSocialLink>
              </div>
          `
    }
})

Templator.New({
    name: 'lpSocialLink',
    observe: 'body',
    render: props => {
        return html`
              <a #margin="0 5px" INHERIT_NAME target="blank" href="${props.link}"  >
                  <img width="52" alt="${props.alt}" src="/media/images/s-${props.name}.png"> 
              </a>
          `
    }
})

Templator.New({
    name: 'lpTopBorderedTitle',
    observe: 'body',
    render: props => {
        return html`
              <div  INHERIT #display="flex" #justify-content="space-around" >
                  <div #background-color="black" #height="1px" #flex="1"></div>
                  <div #font-size="58px">${props.children}</div>
                  <div #background-color="black" #height="1px" #flex="1"></div>
              </div>
          `
    }
})

Templator.New({
    name: 'lpTeamsContainer',
    observe: 'body',
    render: props => {
        return html`
        <div INHERIT #margin-bottom="3em">
        <div>
          <div>
          <div #overflow="hidden" #position="relative" -#margin="0 .5em 0 .5em" >
  
            <!-- Stacking two blurred images on top of eachother makes for a greater glur effect! -->
            <div #transform-origin="50% 50%" #transform="scale(1.8)" #filter="blur(8px)" #position="absolute" #width="100%" #height="100%" #top="0" #left="0" #right="0" #background-size="cover" #background-image="url('${props.frame}')"  ></div>
            <!-- <div #transform-origin="50% 50%" #transform="scale(1.8)" #filter="blur(8px)" #position="absolute" #width="100%" #height="100%" #top="0" #left="0" #right="0" #background-size="cover" #background-image="url('${props.frame}')"  ></div> -->
            <div #padding="0.7em 1em" #position="relative" #font-size="25px" #text-align="center" >
              <span class="__title_long" #user-select="none" #padding="0.3em 0.5em" #background="rgba(0,0,0,.5)" #color="white">${props.game}</span>
              <!-- <span  class="__title_long"  #user-select="none" #background="rgba(0,0,0,.5)" #color="white"><span #box-sizing="border-box" #padding="0.3em 0.5em" >${props.game}</span></span> -->
              <!-- <div #text-align="center" #display="inline-block" #background="rgba(0,0,0,.5)" >  -->
                <!-- <span   class="__title_long"  #padding="0.3em 0.5em" #user-select="none"  #color="white">${props.game}</span> -->
                <!-- <span  class="__title_short" #user-select="none" #padding="0.3em 0.5em" #background="rgba(0,0,0,.5)" #color="white">${props.gameshort}</span> -->
              <!-- <span #position="relative" #float="right" #margin-right="0" #padding="0.3em 0.5em" #background="rgba(0,0,0,.5)" #color="white">2/16</span> -->
            </div>
          </div>
          </div>
  
          <div
            #cursor="pointer"
            class="__teams"
            -#margin=" 0 0.5em 0.5em"
            #display="flex"
            #flex-direction="column"
          >
            <div  #cursor="default">${props.children}</div>
            
            <!-- <div
              #height="6px"
              
              #border-left="5px solid rgb(121,121,121)"
              #border-right="5px solid rgb(121,121,121)"
            ></div> -->
          </div>
        </div>
        </div>
      `
    }
})

function toggleTeamExpansion(id) {
    let elem = document.getElementById(id);
    let others = document.getElementsByClassName('lpTeam');

    if (lp.allowOnlySingleExtendedTeamPanel) {
        Array.from(others).forEach(other => {
            if (other !== elem)
                other.classList.remove('open');
        })
    }

    if (elem) {
        elem.classList.toggle("open");
    }
}

Templator.New({
    name: 'lpTeam-OLD',
    observe: 'body',
    render: props => {

        let teamId = `lpTeam-${props.teamname}`;

        return html`
        <div
        id="${teamId}"
          #cursor="pointer"
          INHERIT
          class="lpTeam"
          #padding="12px 12px"
          #font-size="22px"
          onclick="toggleTeamExpansion('${teamId}')"
          #user-select="none"
        >
          <span>${props.teamname}</span>
  
          <span class="closedExpand" #float="right" > + </span>
          <span class="openExpand" #float="right" #padding-right="2px" #letter-spacing="-2px" > --- </span>
        </div>
        <div
          class="lpTeamInfoPanel"
          
          
          #overflow="hidden"
        >
          <div #position="static" #padding="8px 0 8px 18px">
            <p>Player</p>
            <p>Player</p><p>Player</p><p>Player</p><p>Player</p><p>Player</p>
          </div>
          
        </div>
      `
    }
})

T('lpTeam', props => {
    let teamId = `lpTeam-${props.teamname}`;
    return html`
        <div
            id="${teamId}"
            #cursor="pointer"
            INHERIT
            class="lpTeam"
            #padding="12px 12px"
            #font-size="22px"
            onclick="toggleTeamExpansion('${teamId}')"
            #user-select="none"
        >
            <span>${props.teamname}</span>
            <span class="closedExpand" #float="right" > + </span>
            <span class="openExpand" #float="right" #padding-right="4px" #letter-spacing="-3px" > --- </span>
        </div>

        <div class="lpTeamInfoPanel" #overflow="hidden">
            <div #position="static" #padding="8px 0 8px 18px">
                <p>Player</p>
                <p>Player</p><p>Player</p><p>Player</p><p>Player</p><p>Player</p>
            </div>
        </div>
    `
})

Templator.RenderInDomAll();