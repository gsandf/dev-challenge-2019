import React, { useEffect, useState } from "react";

/**
 * Returns the currently active slide index
 * @return  {number} The index of the active slide
 */
function getCurrentSlideIndex() {
  return Number(window.location.hash.replace(/^#/, "")) || 0;
}

/**
 * Plays tracks from SoundCloud throughout the presentation
 * @param {object} props
 * @param {number[]} props.activeSlides - list of slides to play the track
 * @param {string} props.trackID - the track ID from SoundCloud
 * @return {React.ReactNode} an embedded SoundCloud player
 */
function SoundCloudTrack({ activeSlides, trackID }) {
  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    const currentSlideIndex = getCurrentSlideIndex();
    setShouldPlay(activeSlides.includes(currentSlideIndex));
  });

  if (!shouldPlay) return null;

  return (
    <iframe
      allow="autoplay"
      frameBorder="no"
      height="1"
      scrolling="no"
      src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackID}&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`}
      style={{ display: "none" }}
      width="1"
    />
  );
}

export default SoundCloudTrack;
