import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  duration?: number;
  onComplete?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ duration = 4000, onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  // Flower Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const WORD = 'Loading';
    const PALETTE = {
      bg: '#090a0f',
      type: '#F4EFE6',
      flower: '#D9603A',
      stem: '#A8A08A',
      line: '#FFD0B8',
      core: '#0E0B0A',
    };

    function mulberry32(a: number) {
      return function () {
        var t = (a += 0x6d2b79f5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
    }

    function hash2D(id: number, frame: number) {
      let h = (id * 374761393 + frame * 668265263) ^ 0x5bf03635;
      h = Math.imul(h ^ (h >>> 13), 1274126177);
      return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
    }

    function easeOutCubic(t: number) {
      t = Math.max(0, Math.min(1, t));
      return 1 - Math.pow(1 - t, 3);
    }

    function smoothstep(t: number) {
      t = Math.max(0, Math.min(1, t));
      return t * t * (3 - 2 * t);
    }

    let W = 0, H = 0, S = 70;
    const startTime = performance.now();
    const pointer = { x: -9999, y: -9999, active: false };

    const stars = Array.from({ length: 80 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() < 0.25 ? 1.5 : 1,
      speed: 0.00015 + Math.random() * 0.0003,
    }));

    const letterConfigs = [
      {
        stems: [
          { bx: -0.15, by: -0.3, dir: -Math.PI / 2 - 0.35, len: 0.78, delay: 60, tip: 'poppy', R: 0.23 },
          { bx: 0.1, by: -0.1, dir: Math.PI / 2 + 0.35, len: 0.35, delay: 180, tip: 'leaf' },
        ],
      },
      {
        stems: [
          { bx: 0, by: 0, dir: Math.PI / 2 - 0.2, len: 0.48, delay: 160, tip: 'poppy', R: 0.2 },
          { bx: -0.05, by: -0.3, dir: -Math.PI / 2 + 0.25, len: 0.38, delay: 240, tip: 'leaf' },
        ],
      },
      {
        stems: [
          { bx: 0.05, by: -0.25, dir: -Math.PI / 2 + 0.2, len: 0.55, delay: 260, tip: 'pod' },
        ],
      },
      {
        stems: [
          { bx: 0.08, by: -0.35, dir: -Math.PI / 2 - 0.08, len: 0.82, delay: 320, tip: 'poppy', R: 0.23 },
        ],
      },
      {
        stems: [
          { bx: 0, by: -0.3, dir: -Math.PI / 2 + 0.28, len: 0.48, delay: 380, tip: 'pod' },
          { bx: 0, by: 0, dir: Math.PI / 2 - 0.3, len: 0.32, delay: 420, tip: 'leaf' },
        ],
      },
      {
        stems: [
          { bx: 0.05, by: 0, dir: Math.PI / 2 + 0.25, len: 0.5, delay: 440, tip: 'poppy', R: 0.2 },
          { bx: -0.08, by: -0.2, dir: -Math.PI / 2 - 0.22, len: 0.38, delay: 480, tip: 'leaf' },
        ],
      },
      {
        stems: [
          { bx: 0.15, by: -0.25, dir: -Math.PI / 2 + 0.38, len: 0.8, delay: 520, tip: 'poppy', R: 0.23 },
          { bx: -0.1, by: 0.2, dir: Math.PI / 2 + 0.35, len: 0.42, delay: 580, tip: 'pod' },
        ],
      },
    ];

    const letters = WORD.split('').map((char, idx) => {
      const rng = mulberry32(2000 + idx * 563);
      const config = letterConfigs[idx] || { stems: [] };
      const stems = config.stems.map((st) => {
        const stemId = (rng() * 1000000) | 0;
        const bend = -0.3 + rng() * 0.6;
        const amp = 0.4;
        const waves = 1.2;
        const phase = rng() * Math.PI * 2;
        const steps = 40;
        const stepLen = st.len / steps;

        const points: { x: number; y: number }[] = [];
        let cx = st.bx, cy = st.by;
        points.push({ x: cx, y: cy });

        for (let s = 1; s <= steps; s++) {
          const u = s / steps;
          const heading = st.dir + bend * u + amp * Math.sin(u * Math.PI * waves + phase) * Math.min(1, 3 * u);
          cx += Math.cos(heading) * stepLen;
          cy += Math.sin(heading) * stepLen;
          points.push({ x: cx, y: cy });
        }

        const leaves = [];
        const numLeaves = st.tip === 'leaf' ? 3 : 2;
        for (let l = 0; l < numLeaves; l++) {
          leaves.push({
            u: 0.3 + l * 0.25,
            side: l % 2 === 0 ? 1 : -1,
            angle: 0.7,
            length: 0.2,
          });
        }

        const finalPt = points[points.length - 1];

        return {
          id: stemId,
          points,
          length: st.len,
          delay: st.delay,
          drawDuration: Math.max(400, st.len * 700),
          width: 0.017,
          segments: [
            { startU: 0, endU: 0.4, layer: 0 },
            { startU: 0.4, endU: 1.0, layer: 1 },
          ],
          leaves,
          tip: st.tip,
          R: st.R || 0.22,
          finalPt,
          phase1: rng() * Math.PI * 2,
          phase2: rng() * Math.PI * 2,
          rotation: -0.3 + rng() * 0.6,
        };
      });

      return { char, stems, birthTime: performance.now() };
    });

    function drawFeatheryLeaf(bx: number, by: number, angle: number, L: number, scale: number) {
      if (scale <= 0.001) return;
      ctx!.save();
      ctx!.translate(bx, by);
      ctx!.rotate(angle);
      ctx!.scale(scale, scale);

      ctx!.fillStyle = PALETTE.stem;
      ctx!.beginPath();
      ctx!.moveTo(0, 0);
      for (let i = 0; i <= 24; i++) {
        const u = i / 24;
        const tooth = (u * 5.5) % 1;
        const toothVal = tooth < 0.7 ? tooth / 0.7 : (1 - tooth) / 0.3;
        const w = 0.3 * L * Math.sin(Math.PI * Math.pow(u, 0.8)) * (0.28 + 0.72 * toothVal);
        ctx!.lineTo(-w, u * L);
      }
      for (let i = 24; i >= 0; i--) {
        const u = i / 24;
        const tooth = ((u + 0.09) * 5.5) % 1;
        const toothVal = tooth < 0.7 ? tooth / 0.7 : (1 - tooth) / 0.3;
        const w = 0.3 * L * Math.sin(Math.PI * Math.pow(u, 0.8)) * (0.28 + 0.72 * toothVal);
        ctx!.lineTo(w, u * L);
      }
      ctx!.closePath();
      ctx!.fill();
      ctx!.restore();
    }

    function drawSeedPod(bx: number, by: number, angle: number, L: number) {
      ctx!.save();
      ctx!.translate(bx, by);
      ctx!.rotate(angle);
      ctx!.fillStyle = PALETTE.stem;
      ctx!.beginPath();
      ctx!.ellipse(0, 0.55 * L, 0.44 * L, 0.55 * L, 0, 0, Math.PI * 2);
      ctx!.fill();
      ctx!.restore();
    }

    function drawPoppy(cx: number, cy: number, R: number, rot: number, progress: number, p1: number, p2: number) {
      if (progress <= 0.01) return;
      const spring = 1 - Math.exp(-8 * progress) * Math.cos(14 * progress);

      ctx!.save();
      ctx!.translate(cx, cy);
      ctx!.rotate(rot);
      ctx!.scale(spring, spring);

      const petals = [
        { ox: -0.42, oy: -0.24, rx: 0.6, ry: 0.56, ang: -0.4 },
        { ox: 0.44, oy: -0.22, rx: 0.6, ry: 0.56, ang: 0.4 },
        { ox: -0.38, oy: 0.24, rx: 0.6, ry: 0.5, ang: 0.3 },
        { ox: 0.4, oy: 0.26, rx: 0.6, ry: 0.5, ang: -0.3 },
      ];

      petals.forEach((p, idx) => {
        ctx!.save();
        ctx!.translate(p.ox * R, p.oy * R);
        ctx!.rotate(p.ang);

        ctx!.fillStyle = PALETTE.flower;
        ctx!.beginPath();
        for (let pt = 0; pt <= 20; pt++) {
          const theta = (pt / 20) * Math.PI * 2;
          const crinkle = 1 + 0.045 * Math.sin(5 * theta + p1 + idx) + 0.03 * Math.sin(9 * theta + p2);
          const px = Math.cos(theta) * p.rx * R * crinkle;
          const py = Math.sin(theta) * p.ry * R * crinkle;
          if (pt === 0) ctx!.moveTo(px, py);
          else ctx!.lineTo(px, py);
        }
        ctx!.closePath();
        ctx!.fill();
        ctx!.restore();
      });

      // Core
      if (progress > 0.4) {
        ctx!.fillStyle = PALETTE.core;
        ctx!.beginPath();
        ctx!.ellipse(0, -0.02 * R, 0.24 * R, 0.2 * R, 0, 0, Math.PI * 2);
        ctx!.fill();

        for (let s = 0; s < 10; s++) {
          const a = (s / 10) * Math.PI * 2;
          ctx!.beginPath();
          ctx!.arc(Math.cos(a) * 0.33 * R, Math.sin(a) * 0.33 * R, 0.045 * R, 0, Math.PI * 2);
          ctx!.fill();
        }
      }
      ctx!.restore();
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      W = window.innerWidth;
      H = window.innerHeight;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      const maxW = W < 600 ? W * 0.8 : W * 0.65;
      const S0 = H * 0.22;
      S = Math.min(S0, maxW / (WORD.length * 0.62));
    }

    function render(now: number) {
      ctx!.clearRect(0, 0, W, H);

      // Stars
      ctx!.fillStyle = '#FFFFFF';
      stars.forEach((s) => {
        s.y -= s.speed;
        if (s.y < 0) s.y = 1;
        ctx!.beginPath();
        ctx!.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
        ctx!.fill();
      });

      ctx!.font = `600 ${S}px "Playfair Display", Georgia, serif`;
      ctx!.textAlign = 'center';
      ctx!.textBaseline = 'alphabetic';

      const textWidth = ctx!.measureText(WORD).width;
      const startX = W / 2 - textWidth / 2;
      const baseY = H / 2 + 0.33 * S;
      const boilFrame = Math.floor(now / 120);

      // 8-Second Continuous Loop Cycle
      const LOOP_DURATION = 8000;
      const cycleTime = (now - startTime) % LOOP_DURATION;

      // Fade & Regrow Alpha calculation
      let globalAlpha = 1.0;
      if (cycleTime >= 6200 && cycleTime < 7400) {
        const fadeT = (cycleTime - 6200) / 1200;
        globalAlpha = 1 - easeOutCubic(fadeT);
      } else if (cycleTime >= 7400) {
        globalAlpha = 0;
      }

      // Gentle organic breathing pulse while in full bloom (2.4s - 6.2s)
      const isBreathing = cycleTime > 2400 && cycleTime < 6200;
      const breatheTime = (cycleTime - 2400) / 1000;
      const breathePulse = isBreathing ? Math.sin(breatheTime * 2.2) : 0;
      const breatheScale = 1.0 + 0.05 * breathePulse;

      // Pointer lean offset
      let leanX = 0, leanY = 0;
      if (pointer.active) {
        const dx = pointer.x - W / 2;
        const dy = pointer.y - baseY;
        const dist = Math.hypot(dx, dy);
        if (dist < 350 && dist > 0.001) {
          const str = (1 - dist / 350) * 0.12;
          leanX = (dx / dist) * str * S;
          leanY = (dy / dist) * str * S;
        }
      }

      function drawStems(layerTarget: number) {
        if (globalAlpha <= 0.001) return;
        ctx!.globalAlpha = globalAlpha;

        let curX = startX;
        letters.forEach((l, letterIdx) => {
          const charW = ctx!.measureText(l.char).width;
          const lx = curX + charW / 2;

          // Gentle stem sway during breathing
          const stemSway = isBreathing
            ? Math.sin(breatheTime * 1.8 + letterIdx * 0.9) * 0.035 * S
            : 0;

          l.stems.forEach((st) => {
            const elapsed = cycleTime - st.delay;
            if (elapsed <= 0) return;

            const drawFrac = easeOutCubic(elapsed / st.drawDuration);
            const maxPtIdx = Math.floor(drawFrac * (st.points.length - 1));

            const bRand = hash2D(st.id, boilFrame);
            const bx = (-0.5 + bRand) * 1.5;
            const by = (-0.5 + hash2D(st.id + 1, boilFrame)) * 1.5;

            ctx!.save();
            ctx!.translate(lx + bx, baseY + by);

            st.segments.forEach((seg) => {
              if (seg.layer !== layerTarget) return;
              const startIdx = Math.floor(seg.startU * (st.points.length - 1));
              const endIdx = Math.min(maxPtIdx, Math.floor(seg.endU * (st.points.length - 1)));
              if (startIdx >= endIdx) return;

              ctx!.strokeStyle = PALETTE.stem;
              ctx!.lineWidth = st.width * S;
              ctx!.lineCap = 'round';
              ctx!.lineJoin = 'round';

              ctx!.beginPath();
              for (let p = startIdx; p <= endIdx; p++) {
                const pt = st.points[p];
                const u = p / (st.points.length - 1);
                const px = pt.x * S + stemSway * u + leanX * u;
                const py = pt.y * S + leanY * u;
                if (p === startIdx) ctx!.moveTo(px, py);
                else ctx!.lineTo(px, py);
              }
              ctx!.stroke();

              st.leaves.forEach((lf) => {
                const lIdx = Math.floor(lf.u * (st.points.length - 1));
                if (lIdx >= startIdx && lIdx <= endIdx) {
                  const pt = st.points[lIdx];
                  const leafT = (cycleTime - st.delay - st.drawDuration * lf.u) / 1000;
                  const scale = Math.max(0, 1 - Math.exp(-7 * leafT) * Math.cos(15 * leafT));
                  const leafAngle = lf.side * lf.angle + (isBreathing ? Math.sin(breatheTime * 3 + lf.u * 4) * 0.08 : 0);
                  drawFeatheryLeaf(
                    pt.x * S + stemSway * lf.u + leanX * lf.u,
                    pt.y * S + leanY * lf.u,
                    leafAngle,
                    lf.length * S,
                    scale * (1 + 0.04 * breathePulse)
                  );
                }
              });
            });

            if (drawFrac >= 0.8 && layerTarget === 1) {
              const fPt = st.finalPt;
              const flowerX = fPt.x * S + stemSway + leanX;
              const flowerY = fPt.y * S + leanY;

              if (st.tip === 'poppy') {
                const popT = (cycleTime - st.delay - st.drawDuration * 0.75) / 1000;
                drawPoppy(
                  flowerX,
                  flowerY,
                  st.R * S * breatheScale,
                  st.rotation,
                  Math.max(0, popT),
                  st.phase1,
                  st.phase2
                );
              } else if (st.tip === 'pod') {
                drawSeedPod(flowerX, flowerY, 0, 0.12 * S * breatheScale);
              }
            }

            ctx!.restore();
          });

          curX += charW;
        });

        ctx!.globalAlpha = 1.0;
      }

      // Layer 0: Stems behind
      drawStems(0);

      // Text: solid and glowing
      ctx!.fillStyle = PALETTE.type;
      ctx!.fillText(WORD, W / 2, baseY);

      // Layer 1: Stems and blooms in front
      drawStems(1);

      animId = requestAnimationFrame(render);
    }

    const handlePointerMove = (e: MouseEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseleave', handlePointerLeave);
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseleave', handlePointerLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)',
          }}
        >
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
