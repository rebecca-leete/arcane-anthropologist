import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import FullWidthImage from "../components/containers/FullWidthImage"
import TitleImage from "../components/containers/TitleImage"
import FeatureText from "../components/containers/FeatureText"
import Layout from "../components/Layout"
import FullWidthYellow from "../components/containers/FullWidthYellow"
import FeatureTextImage from "../components/containers/FeatureTextImage"


export default () => {
  const data = useStaticQuery (
    graphql`
      query {
        site {
          siteMetadata {
            latestBlog
        }
      }
    }
    `
  )
  return (
    <Layout>
    <FullWidthYellow />
      <TitleImage Text={data.site.siteMetadata.latestBlog} ImgSrc="/images/AK2.jpg" ImgAlt="AK2"/>
      <FeatureText Title="Introduction" Content={"This is a buzzy as dream I had a couple years ago. I should probably sell it to Warner Bros or something."} />
      <p className="blog-post-content">
        Me and my family had just travelled to a town down south, and heard that there was going to be an assassination attempt on the Mayor of the town, who was a good person. He and one of his “good friends” – a narrow man with a really big smile and lines on his face, who instantly gave off a devious, malicious vibe in the dream (I think he was actually a long time criminal mastermind) – were practicing some archery together. By the time I got there, he had turned his bow on the Mayor, who was trying to talk to him to find an explanation for this genuinely unexpected betrayal. I had a bow as well, and tried to shoot the criminal before he shot the Mayor, but my shots were really poor, and I got discovered. I was only a couple feet away in the dream, so when he turned his bow on me I raced over to grab it so he couldn’t aim it at me. Then I felt this stabbing in my hand, and saw that there was a little mechanism at the top of the bow, where my hand was, that had extended the bow by like an inch, revealing two spikes facing inward to each other, and when the pressure of my hand went on them, they clamped shut and stabbed me. The criminal smiled when he saw, and explained with an air of immense satisfaction that I had just been injected with a deadly, fast-acting poison. I needed to get to a hospital, fast. We had no cars, so I just started running back north. The nearest hospital was in Nelson. As I left the town, my ‘sister’ (who was actually my cousin Courtney), rode up beside me and said I could take her horse. I had no idea how to get on or ride, but I managed to fluke most of it, and set off at a gallop. The rest of my family was also racing to the hospital in whatever way they could. I remembered the commands from when I went horse riding in Iceland, and managed to speed across the country side without any incident. I remember feeling my hand go numb, and freaking out because I had no idea how far the poison had spread, and after a while the numbness subsided again, for better or for worse. I got the hospital and was taken swiftly inside. I burst into the waiting room and pushed past all the patients and explained breathlessly what was going on, and went into a little side room without even asking where I should go. As it turned out it was the right place to go, and some people took me into a better-lit room and did some blood tests etc. I think my family had arrived by then too. The doctor didn’t seem that interested in my well-being, and in the end he explained that I hadn’t been poisoned at all, that was just a front to get you up to the hospital. In reality, I had been injected with a kind of deadly worm, and that had needed to be transported up to him covertly because the criminal couldn’t leave that town. I, along with everyone else, was horrified. You could see the little worm under the microscope, extracted in my “blood test”, swimming along. It had a gaping mouth with thousands of teeth, and no eyes, and it was growing in an alarming rate. It fed on sugar apparently, and could smell it in anything around it. It was incredibly fast and reproduced faster than anyone could control. It was meant to be at the forefront of biological warfare. We all protested – couldn’t the doctor see the insanity and danger in this? The uncontrollability of it? He was unphased. Somehow the worm had already grown to the size of a dog, and I knew it was going to kill everyone in the hospital. I smashed part of the massive window panel that overlooked the country side, and leapt out, followed soon after by the horse (my horse?) in a beautiful display of loyalty. I hopped on and rode off, still heading north.
      </p>
      <FullWidthImage ImgSrc="/images/AK3.jpg" />
      <FeatureText Title="This is an important point" Content=" I burst into the waiting room and pushed past all the patients and explained breathlessly what was going on, and went into a little side room without even asking where I should go. As it turned out it was the right place to go, and some people took me into a better-lit room and did some blood tests etc. I think my family had arrived by then too. The doctor didn’t seem that interested in my well-being, and in the end he explained that I hadn’t been poisoned at all, that was just a front to get you up to the hospital." />
      <p className="blog-post-content">
        The worm had now multiplied and reached its full form. It was made of a series of sharp metal boxes, with its head opening into hundreds of rows of razor teeth. Anything it touched was devoured. My poor horse had been pushed to its limits, and was struggling to stay at a gallop, but we kept going, heading for the biggest city at the northern-most point of the island. We barely stayed ahead of the worms as they razed everything around them. We couldn’t outrun them; we just had to rely on their bloodthirst to have them focus on easier targets first. At one stage we were going as fast as we could because there was one right on our tail and it was intent on catching us. It veered away at the last minute towards an enclosed paddock of sheep, and somehow we could hear it thinking that the sheep’s blood-sugar content was higher, and so that was how they must prioritise their victims. We reached the city at night time, after the tightest, most stressful and urgent ride of our life, and it was not going to stop there. By now there were enough worms to take over the entire city – there was nothing anyone could do. They started to connect together to form a geometrical barrier in the harbour, which effectively shut off the population’s only chance of escape. The horse and I made a go for it anyway (I think there was another person with me now actually, yeah I vaguely remember riding with another person too), but again we were chased. The horse decided to stop, sacrificing itself to save us by slowing down our pursuers. It told us that we have to crawl along the ocean floor, because we’ll be spotted if we just try to swim, and that the wall shouldn’t extend the entire way under water. We tried to swim because it seemed faster, but then I noticed a spotlight on me, and realised the horse was right. I dived down and grabbed onto the rocky ocean floor to hold me under, and began the slow crawl. I could breathe a little bit underwater, so there was no fear of needing to go up for air, and the moving process was almost like upside-down rock climbing. The worms knew I was out there somewhere, and I could see them searching for me. They were so close by. I pulled my body completely underwater because I was worried my feet might have been splashing, and tried to remain as still as possible. But it didn’t work. I couldn’t figure out how I’d been detected, but it said/though that it could smell my screams. I closed my eyes, accepting my death, and transferred to a big fist being put in front of my face, which I knew I was meant to bite to stop the screams as I was eaten. I refused to bite, one last, pointless rebellion as I died. Then from was above the scene, I could see an armada of warships approaching the city from the north. I could hear a panicked exchange of the doctor pleading with them not to attack, as it would make the situation irreversible, but the military men making no move to back down regardless. Then I woke up.
      </p>
      <FeatureTextImage
        imgSrc="/images/artemisme.jpg" imgAlt="artemisme"
        title="About the Me"
        text="This is some stuff about me and why I’m really cool and interesting and why you want to know more about me… For example I’m a badass forest fey and an alright stoner"
        button="Oooh how intriguing!"
      />
    </Layout>
  )
}
