import React from "react"
import Thumbnail from "../Thumbnail"

export default () => {
  return (
    <div class="grid" id="thumbnail-row">
      <div><Thumbnail ImgSrc="/images/lotus.jpg" ImgAlt="lotus"
        Title="Lotus get back to you" Text="What a blooming beautiful day it is procrastinate!"
      /></div>
      <div><Thumbnail ImgSrc="/images/lotus.jpg" ImgAlt="lotus"
        Title="Lotus get back to you" Text="What a blooming beautiful day it is procrastinate!"
      /></div>
      <div><Thumbnail ImgSrc="/images/lotus.jpg" ImgAlt="lotus"
        Title="Lotus get back to you" Text="What a blooming beautiful day it is procrastinate!"
      /></div>
    </div>
  )
}