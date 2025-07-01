import * as React from "react"
import Svg, { Path, Defs, ClipPath, Use, G } from "react-native-svg"

function Calabera(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      height={100}
      width={100}
      viewBox="0 0 96 96"
      xmlSpace="preserve"
      {...props}
    >
      <Defs>
        <Path id="a" d="M0 0H96V96H0z" />
      </Defs>
      <ClipPath>
        <Use xlinkHref="#a" overflow="visible" />
      </ClipPath>
      <Defs>
        <Path id="b" d="M0 0H96V96H0z" />
      </Defs>
      <ClipPath id="c">
        <Use xlinkHref="#b" overflow="visible" />
      </ClipPath>
      <Defs>
        <Path
          id="d"
          d="M10 40c0 20.986 17.014 38 38 38 20.987 0 38-17.014 38-38C86 19.013 68.987 2 48 2 27.014 2 10 19.013 10 40"
        />
      </Defs>
      <ClipPath id="e">
        <Use xlinkHref="#d" overflow="visible" />
      </ClipPath>
      <Path
        clipPath="url(#e)"
        fill="#A8C4C6"
        d="M86 40C86 19.013 68.987 2 48 2S10 19.013 10 40s17.013 38 38 38 38-17.013 38-38"
      />
      <Path
        clipPath="url(#e)"
        fill="#FFF"
        d="M78 32C78 11.013 60.987-6 40-6S2 11.013 2 32s17.013 38 38 38 38-17.013 38-38"
      />
      <Path
        clipPath="url(#e)"
        fill="#FFF"
        d="M92.284 46.036c0-20.987-17.013-38-38-38s-38 17.013-38 38 17.013 38 38 38c7.551 0-80.915 36.797-75 33 2.646-1.699 11.857-134.717 14-137 2.942-3.135 133.234-5.299 123-7-11.957-1.987-24 78.419-24 73"
      />
      <G>
        <Defs>
          <Path id="f" d="M0 0H96V96H0z" />
        </Defs>
        <ClipPath id="g">
          <Use xlinkHref="#f" overflow="visible" />
        </ClipPath>
        <Path
          clipPath="url(#g)"
          fill="#2D4D68"
          d="M48 80C25.944 80 8 62.056 8 40S25.944 0 48 0s40 17.944 40 40-17.944 40-40 40m0-76C28.149 4 12 20.149 12 40s16.149 36 36 36 36-16.149 36-36S67.851 4 48 4"
        />
        <Path
          clipPath="url(#g)"
          fill="#FFF"
          d="M72 61v23c0 5.523-4.477 10-10 10H34c-5.523 0-10-4.477-10-10V61"
        />
      </G>
      <G>
        <Defs>
          <Path
            id="h"
            d="M24 61v23c0 5.523 4.477 10 10 10h28c5.523 0 10-4.477 10-10V61H24z"
          />
        </Defs>
        <ClipPath id="i">
          <Use xlinkHref="#h" overflow="visible" />
        </ClipPath>
        <Path
          clipPath="url(#i)"
          fill="#A8C4C6"
          d="M72 61v23c0 5.523-4.477 10-10 10H34c-5.523 0-10-4.477-10-10V61"
        />
        <Path
          clipPath="url(#i)"
          fill="#FFF"
          d="M65 55v23c0 5.523-4.477 10-10 10H27c-5.523 0-10-4.477-10-10V55"
        />
      </G>
      <G>
        <Defs>
          <Path id="j" d="M0 0H96V96H0z" />
        </Defs>
        <ClipPath id="k">
          <Use xlinkHref="#j" overflow="visible" />
        </ClipPath>
        <Path
          clipPath="url(#k)"
          fill="#567B8E"
          d="M21 34c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10-10 4.477-10 10"
        />
      </G>
      <G>
        <Defs>
          <Path
            id="l"
            d="M21 34c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10-10 4.477-10 10"
          />
        </Defs>
        <ClipPath id="m">
          <Use xlinkHref="#l" overflow="visible" />
        </ClipPath>
        <Path
          clipPath="url(#m)"
          fill="#567B8E"
          d="M21 34c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10-10 4.477-10 10"
        />
      </G>
      <G>
        <Defs>
          <Path id="n" d="M0 0H96V96H0z" />
        </Defs>
        <ClipPath id="o">
          <Use xlinkHref="#n" overflow="visible" />
        </ClipPath>
        <Path
          clipPath="url(#o)"
          fill="#567B8E"
          d="M55 34c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10-10 4.477-10 10"
        />
        <Path
          clipPath="url(#o)"
          fill="#2D4D68"
          d="M31 46c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12m0-20c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8M65 46c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12m0-20c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8M48 96a2 2 0 01-2-2V77a2 2 0 014 0v17a2 2 0 01-2 2M60 96a2 2 0 01-2-2V81a2 2 0 014 0v13a2 2 0 01-2 2M36 96a2 2 0 01-2-2V81a2 2 0 014 0v13a2 2 0 01-2 2"
        />
        <Path
          clipPath="url(#o)"
          fill="#2D4D68"
          d="M62 96H34c-6.617 0-12-5.383-12-12V61a2 2 0 014 0v23c0 4.411 3.589 8 8 8h28c4.411 0 8-3.589 8-8V61a2 2 0 014 0v23c0 6.617-5.383 12-12 12"
        />
      </G>
    </Svg>
  )
}

export default Calabera
