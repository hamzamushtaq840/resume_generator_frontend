import React from "react";
import gsap from 'gsap';
import { useEffect, createRef, useState } from 'react';
import { Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material';

import './Unauthorized.css';
import Astronaut from './../../Assets/astronaut';
import Comet from './../../Assets/comet';
import Stars from './../../Assets/stars';
import Star from './../../Assets/star';
import BlackHole from './../../Assets/black-hole';

/**
 * @typedef {object} AnimationOption
 * @property {React.MutableRefObject} ref
 * @property {gsap.TweenVars} from
 * @property {gsap.TweenVars} to
 * @property {string | undefined} fill
 * @property {string | undefined} stroke
 * @property {string | undefined} kind
 */


const palette = {
  light_blue: '#8ECAE6',
  cyan: '#0A9396',
  light_cyan: '#94D2BD',
  yellow: '#FFB703',
  light_yellow: '#F9C74F'
};



function Missing() {
  const [cd, set_cd] = useState(30);

  /**
   * @type {AnimationOption}
   */
  const astronaut_option = {
    from: { width: 512, height: 512 },
    to: {
      rotation: 1,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      duration: 1,
    }
  };

  /**
   * @type {AnimationOption}
   */
  const blackhole_option = {
    from: {
      width: 128,
      height: 128,
      x: 110,
      y: 400
    },
    to: {
      rotation: 360,
      repeat: -1,
      ease: 'none',
      duration: 10,
    }
  }

  /**
   * @type {AnimationOption[]}
   */
  const comets_options = [
    {
      from: {
        width: 64,
        height: 64,
        x: 400,
        y: -80
      },
      to: {
        x: -80,
        y: 400,
        ease: 'none',
        duration: 5,
        delay: 2,
        repeat: -1,
        repeatDelay: 5
      },
      fill: palette.light_cyan,
      stroke: palette.cyan
    },
    {
      from: {
        width: 48,
        height: 48,
        x: 200,
        y: -80
      },
      to: {
        x: -80,
        y: 200,
        ease: 'none',
        duration: 2,
        repeat: -1,
        repeatDelay: 5
      }
    },
    {
      from: {
        width: 36,
        height: 36,
        x: 500,
        y: -80
      },
      to: {
        x: -80,
        y: 500,
        ease: 'none',
        duration: 10,
        delay: 2,
        repeat: -1,
        repeatDelay: 10
      }
    }
  ];

  /**
   * @type {AnimationOption[]}
   */
  const stars_options = [
    {
      from: {
        width: 64,
        height: 64,
        x: 80,
        y: 100
      },
      to: {
        dx: 3,
        dy: 3,
        yoyo: true,
        repeat: -1,
        duration: 1,
        ease: 'sine.inOut'
      },
      fill: palette.yellow
    },
    {
      from: {
        width: 64,
        height: 64,
        x: 380,
        y: 10
      },
      to: {
        dx: 5,
        yoyo: true,
        repeat: -1,
        duration: 1,
        ease: 'sine.inOut'
      }
    },
    {
      from: {
        width: 48,
        height: 48,
        x: 310,
        y: 210
      },
      to: {
        dx: -2,
        dy: -2,
        yoyo: true,
        repeat: -1,
        duration: 1,
        ease: 'sine.inOut'
      },
      fill: palette.light_blue
    },
    {
      from: {
        width: 32,
        height: 32,
        x: 390,
        y: 260
      },
      to: {
        dx: -2,
        dy: -2,
        yoyo: true,
        repeat: -1,
        duration: 1,
        ease: 'sine.inOut'
      }
    },
    {
      from: {
        width: 48,
        height: 48,
        x: 100,
        y: 300
      },
      to: {
        dx: -3,
        dy: -3,
        yoyo: true,
        repeat: -1,
        duration: 1,
        ease: 'sine.inOut'
      }
    }
  ];

  /**
   * @type {AnimationOption[]}
   */
  const star_options = [
    {
      from: {
        width: 20,
        height: 20,
        x: 90,
        y: 270
      },
      to: {
        dx: -3,
        dy: -3,
        yoyo: true,
        repeat: -1,
        duration: 1,
        ease: 'sine.inOut'
      },
      fill: palette.yellow
    },
    {
      from: {
        width: 32,
        height: 32,
        x: 60,
        y: 210
      },
      to: {
        dx: 2,
        dy: 2,
        yoyo: true,
        repeat: -1,
        duration: 1,
        ease: 'sine.inOut'
      }
    },
    {
      from: {
        width: 8,
        height: 8,
        x: 340,
        y: 315
      },
      to: {
        dx: 1,
        dy: 1,
        yoyo: true,
        repeat: -1,
        duration: 1,
        ease: 'sine.inOut'
      },
      fill: palette.light_yellow
    },
    {
      from: {
        width: 20,
        height: 20,
        x: 315,
        y: 360
      },
      to: {
        dx: 2,
        dy: 2,
        yoyo: true,
        repeat: -1,
        duration: 1,
        ease: 'sine.inOut'
      }
    },
    {
      from: {
        width: 24,
        height: 24,
        x: 307,
        y: 447
      },
      to: {
        dx: 24,
        dy: 24,
        yoyo: true,
        repeat: -1,
        duration: 5,
        ease: 'sine.inOut'
      },
      fill: palette.light_blue
    },
    {
      from: {
        width: 32,
        height: 32,
        x: 328,
        y: 468
      },
      to: {
        dx: -30,
        dy: -30,
        yoyo: true,
        repeat: -1,
        duration: 5,
        ease: 'sine.inOut'
      }
    },
    {
      from: {
        width: 16,
        height: 16,
        x: 100,
        y: 70,
        scale: 0.1,
        transformOrigin: '50% 50%'
      },
      to: {
        scale: 1,
        yoyo: true,
        repeat: -1,
        repeatDelay: 0.1
      },
      kind: 'shine'
    },
    {
      from: {
        width: 16,
        height: 16,
        x: 100,
        y: 370,
        scale: 0.1,
        transformOrigin: '50% 50%'
      },
      to: {
        scale: 1,
        yoyo: true,
        repeat: -1,
        repeatDelay: 0.1,
        delay: 0.25
      },
      kind: 'shine'
    },
    {
      from: {
        width: 24,
        height: 24,
        x: 245,
        y: 225,
        scale: 0.1,
        transformOrigin: '50% 50%'
      },
      to: {
        scale: 1,
        yoyo: true,
        repeat: -1,
        repeatDelay: 0.1,
        delay: 0.5
      },
      kind: 'shine'
    },
    {
      from: {
        width: 16,
        height: 16,
        x: 340,
        y: 425,
        scale: 0.1,
        transformOrigin: '50% 50%'
      },
      to: {
        scale: 1,
        yoyo: true,
        repeat: -1,
        repeatDelay: 0.1,
        delay: 0.75
      },
      kind: 'shine'
    },
    {
      from: {
        width: 16,
        height: 16,
        x: 310,
        y: 395
      },
      to: {
        rotation: 20,
        transformOrigin: '50% 50%',
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
      },
      kind: '5-corner',
      fill: palette.light_cyan
    },
    {
      from: {
        width: 20,
        height: 20,
        x: 135,
        y: 200
      },
      to: {
        rotation: 20,
        transformOrigin: '50% 50%',
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
      },
      kind: '5-corner'
    },
    {
      from: {
        width: 20,
        height: 20,
        x: 375,
        y: 180
      },
      to: {
        rotation: 20,
        transformOrigin: '50% 50%',
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
      },
      kind: '5-corner'
    },
    {
      from: {
        width: 24,
        height: 24,
        x: 385,
        y: 367
      },
      to: {
        rotation: 20,
        transformOrigin: '50% 50%',
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
      },
      kind: '5-corner',
      fill: palette.light_yellow
    }
  ];

  const all_options = [
    astronaut_option,
    blackhole_option,
    ...comets_options,
    ...stars_options,
    ...star_options
  ];

  for (const option of all_options) {
    option.ref = createRef();
    if (option.to.dx != null) {
      option.to.x = (option.from.x || 0) + option.to.dx;
      delete option.to.dx;
    }
    if (option.to.dy != null) {
      option.to.y = (option.from.y || 0) + option.to.dy;
      delete option.to.dy;
    }
  }

  // only start the animation once
  useEffect(
    () => {
      for (const option of all_options) {
        gsap.fromTo(option.ref.current, option.from, option.to);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return (
   <main id="page404" className="page">
      <Grid container direction="row" justifyContent="center" alignItems="center" mt={2}>
        <Grid item xs={0} md={1} />
        <Grid item xs={12} md={3}>
          <Box id="outer-space">
            <Astronaut props={{ ref: astronaut_option.ref, className: "astronaut" }} />
            <BlackHole props={{ ref: blackhole_option.ref, className: "blackhole" }} />
            {comets_options.map((o, i) =>
              <Comet key={`comet-${i}`} props={{ ref: o.ref, className: "comet" }}
                fill={o.fill} stroke={o.stroke} />)}
            {stars_options.map((o, i) =>
              <Stars key={`stars-${i}`} props={{ ref: o.ref, className: "star" }}
                fill={o.fill} stroke={o.stroke} />)}
            {star_options.map((o, i) =>
              <Star key={`star-${i}`} props={{ ref: o.ref, className: "star" }}
                fill={o.fill} stroke={o.stroke} kind={o.kind} />)}
          </Box>
        </Grid>
        <Grid item xs={0} md={2} />
        <Grid item xs={12} md={6}>
          <Container id="message-404" maxWidth="sm">
            <Box p={1}>
              <Typography variant="h1" gutterBottom>
                404
              </Typography>
              <Typography variant="h4" gutterBottom>
                PAGE NOT FOUND
              </Typography>
              {/* <Typography variant="outline" gutterBottom>
               Acces denied
              </Typography> */}
              
            </Box>
            <Box p={1} mt={3}>
              <Divider />
              <br />
            </Box>
          </Container>
        </Grid>
      </Grid>
    </main>
)
}

export default Missing;
