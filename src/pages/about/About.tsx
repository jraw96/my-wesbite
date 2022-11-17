import React from 'react';
import './About.scss';
import { AboutImages } from '../../util/images-urls';
import ImageRender, {
  imageProps,
} from '../../components/imageRender/ImageRender';
import { pages, TravelPageRoutes } from '../../util/types';
import MyGallery from '../../components/Gallery/gallery';

function About() {
  // Posing infront of Yosmeite pic
  const imageProps1: imageProps = {
    src: AboutImages.meAtYosemite,
    alt: 'Jake at Tunnel View, Yosemite',
    width: 400,
    title: 'At Tunnel View in Yosemite Park, CA, USA - 2022',
    link: `${window.location.origin}${pages.travel}${TravelPageRoutes.roadTrip2022}`,
  };

  return (
    <div className="about-container">
      <div className="col">
        <div className="image-container">
          <ImageRender {...imageProps1} />
        </div>
      </div>
      <div className="col">
        <div className="content-container">
          <p className="first-sentence text">Hi, I'm Jake!</p>
          <p className="text">
            I'm a software engineer based in Austin, Texas.
          </p>
          <p className="text">
            Originally from Waterloo, Ontario, I relocated down south in April
            2021 and have been adventuring in the USA since!{' '}
          </p>
          <p className="text">
            I'm a big fan of drinking coffee, eating baguettes and cooking with
            my cast iron pan.
          </p>
          <p className="text">
            I love to read, and keep a section on this website decidated to the
            books I've read! I was inspired by this book in 2017:{' '}
            <a
              className="link"
              target={'_blank'}
              rel="noreferrer"
              href="https://en.wikipedia.org/wiki/1001_Books_You_Must_Read_Before_You_Die"
            >
              1001 Books You Must Read Before You Die
            </a>
            . I have about 970 books to go still.
          </p>
          <p className="text">
            My favourite music genre is Math Rock. Nothing quite sounds like it.
            I have a playlist of my all-time favoure math rock tracks on Spotify{' '}
            <a
              className="link"
              href="https://open.spotify.com/playlist/0ttgklSXa9ZWGr3MwCsbJZ?si=94bfe5a64db04acc"
            >
              {' '}
              here.
            </a>
          </p>
          <p className="text">
            I'm an avid Scrabble player, and am always looking for excuses to
            bust out my 10 lbs Scrabble board at random occasions. The toughest
            oppponent I've ever faced is my mom.
          </p>
        </div>
      </div>

      <MyGallery />
    </div>
  );
}

export default About;
