import React, { useEffect, useRef, useState } from "react";

function createStar(id, numStars) {
  const depth = (id + 1) / numStars;
  let size, opacity, color = '#fff';
  // 90% small, 5% medium, 5% large
  const rand = Math.random();
  if (rand < 0.9) {
    size = 1 + Math.random() * 1.2; // small: 1-2.2px
    opacity = 0.3 + Math.random() * 0.2;
  } else if (rand < 0.95) {
    size = 2.3 + Math.random() * 1.7; // medium: 2.3-4px
    opacity = 0.6 + Math.random() * 0.3;
  } else {
    size = 4.1 + Math.random() * 2.5; // large: 4.1-6.6px
    opacity = 0.8 + Math.random() * 0.5;
  }
  if (Math.random() > 0.7) color = 'rgba(180,200,255,0.9)';
  return {
    id,
    baseTop: -5, // always start just above the top
    baseLeft: Math.random() * 100,
    fallOffset: 0,
    fallSpeed: 1.0 + Math.random() * 0.5,
    size,
    opacity,
    color,
    depth
  };
}

function GalaxyBackground() {
  const numStars = 122;
  const [stars, setStars] = useState([]);
  const [shootingStar, setShootingStar] = useState(null);
  const shootingStarId = useRef(0);
  const animationRef = useRef();
  const mouse = useRef({ x: 0, y: 0, lastMove: Date.now() });
  const starIdCounter = useRef(numStars);
  const starStates = useRef([]);

  // Initialize stars once
  useEffect(() => {
    const newStars = [];
    for (let i = 0; i < numStars; i++) {
      const star = createStar(i, numStars);
      star.baseTop = Math.random() * 100; // initial random vertical position
      newStars.push(star);
    }
    setStars(newStars);
    starStates.current = newStars;
  }, []);

  // Animate stars (ultra-smooth, decoupled from React state)
  useEffect(() => {
    let currentX = 0, currentY = 0;
    let targetX = 0, targetY = 0;
    const maxOffset = 140;
    const lerp = (a, b, t) => a + (b - a) * t;
    let lastUpdate = performance.now();
    let frameCount = 0;
    function animate(now) {
      currentX = lerp(currentX, targetX, 0.06); // lower for smoother
      currentY = lerp(currentY, targetY, 0.06);
      const nowTime = Date.now();
      const mouseRecentlyMoved = nowTime - mouse.current.lastMove < 1000;
      let updatedStars = starStates.current.map(star => {
        const factor = 0.2 + 0.8 * star.depth;
        let fallOffset = star.fallOffset;
        fallOffset += mouseRecentlyMoved ? star.fallSpeed * 0.5 : star.fallSpeed;
        return {
          ...star,
          fallOffset,
          top: `calc(${star.baseTop + (fallOffset * 100 / window.innerHeight)}% + ${currentY * factor * maxOffset}px)`,
          left: `calc(${star.baseLeft}% + ${currentX * factor * maxOffset}px)`
        };
      });
      // Remove stars that are off the bottom and add new ones at the top
      const stillOnScreen = [];
      updatedStars.forEach(star => {
        if (star.baseTop + (star.fallOffset * 100 / window.innerHeight) < 105) {
          stillOnScreen.push(star);
        }
      });
      while (stillOnScreen.length < numStars) {
        stillOnScreen.push(createStar(starIdCounter.current++, numStars));
      }
      starStates.current = stillOnScreen;
      // Only update React state every 2 frames for smoothness
      frameCount = (frameCount + 1) % 2;
      if (frameCount === 0) {
        setStars(stillOnScreen);
      }
      animationRef.current = requestAnimationFrame(animate);
    }
    animationRef.current = requestAnimationFrame(animate);
    const onMove = (e) => {
      targetX = e.clientX / window.innerWidth - 0.5;
      targetY = e.clientY / window.innerHeight - 0.5;
      mouse.current.lastMove = Date.now();
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, [numStars]);

  // Improved shooting star logic
  useEffect(() => {
    let timeout;
    function spawnShootingStar() {
      const id = shootingStarId.current++;
      const startTop = Math.random() * 28 + 2;
      const startLeft = Math.random() * 13 + 2;
      const endTop = 70 + Math.random() * 20;
      const endLeft = 70 + Math.random() * 20;
      const duration = 3000 + Math.random() * 2000;
      setShootingStar({ id, startTop, startLeft, endTop, endLeft, duration });
      timeout = setTimeout(spawnShootingStar, duration + 3000 + Math.random() * 3000);
    }
    spawnShootingStar();
    return () => clearTimeout(timeout);
  }, []);

  // Remove shooting star after animation
  useEffect(() => {
    if (!shootingStar) return;
    const timer = setTimeout(() => setShootingStar(null), shootingStar.duration);
    return () => clearTimeout(timer);
  }, [shootingStar]);

  return (
    <div id="galaxy-bg" className="galaxy-bg" aria-hidden="true">
      {stars.map(star => (
        <div
          key={star.id}
          className="star"
          style={{
            position: 'absolute',
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            background: star.color,
            opacity: star.opacity,
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />
      ))}
      {shootingStar && (() => {
        const dx = shootingStar.endLeft - shootingStar.startLeft;
        const dy = shootingStar.endTop - shootingStar.startTop;
        const angle = Math.atan2(dy, dx) * 180 / Math.PI;
        return (
          <div
            key={shootingStar.id}
            style={{
              position: 'absolute',
              top: `${shootingStar.startTop}%`,
              left: `${shootingStar.startLeft}%`,
              width: 0,
              height: 0,
              pointerEvents: 'none',
              zIndex: 1,
              animation: `shooting-star-move ${shootingStar.duration}ms linear forwards`,
              transformOrigin: '0 0',
              transform: `rotate(${angle}deg)`
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: '-60px',
                top: '-1px',
                width: '60px',
                height: '2px',
                background: 'linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.05) 100%)',
                borderRadius: '2px',
                boxShadow: '0 0 2px 1px #fff',
                opacity: 0.35,
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: '-3px',
                top: '-3px',
                width: '6px',
                height: '6px',
                background: 'white',
                borderRadius: '50%',
                boxShadow: '0 0 8px 2px #fff',
                opacity: 0.7,
              }}
            />
            <style>{`
              @keyframes shooting-star-move {
                0% {
                  opacity: 1;
                  transform: translate(0,0) rotate(${angle}deg);
                }
                90% {
                  opacity: 1;
                }
                100% {
                  opacity: 0;
                  transform: translate(${dx}vw, ${dy}vh) rotate(${angle}deg);
                }
              }
            `}</style>
          </div>
        );
      })()}
    </div>
  );
}

export default GalaxyBackground; 