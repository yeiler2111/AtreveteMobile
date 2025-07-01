import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use } from "react-native-svg"

function Arrow(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 24 24"
      {...props}
    >
      <Defs>
        <Path
          id="a"
          d="M2.293.293a1 1 0 111.414 1.414l-2 2A1 1 0 01.293 2.293l2-2z"
        />
        <Path
          id="c"
          d="M3.414 4h9.587a1 1 0 010 2H3.414l2.293 2.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 111.414 1.414L3.414 4z"
        />
      </Defs>
      <G fill="none" fillRule="evenodd" transform="matrix(-1 0 0 1 19 7)">
        <G transform="translate(3 1)">
          <Mask id="b" fill="#fff">
            <Use xlinkHref="#a" />
          </Mask>
          <Use fill="#D8D8D8" fillRule="nonzero" xlinkHref="#a" />
          <G fill="#FFA0A0" mask="url(#b)">
          <Path transform="translate(-8 -8)" d="M0 0H24V24H0z"/>
          </G>
        </G>
        <Mask id="d" fill="#fff">
          <Use xlinkHref="#c" />
        </Mask>
        <Use fill="#000" fillRule="nonzero" xlinkHref="#c" />
        <G fill="#fff" mask="url(#d)">
          <Path transform="translate(-5 -7)" d="M0 0H24V24H0z" />
        </G>
      </G>
    </Svg>
  )
}

export default Arrow
