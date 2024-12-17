import { useEffect, useRef } from "react";

export default function MeshBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createNoise = () => (Math.random() - 0.5) * 2;

    const points = Array.from({ length: 100 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: createNoise() * 0.5,
      vy: createNoise() * 0.5,
    }));

    const animate = () => {
      ctx.fillStyle = "rgba(15, 23, 42, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      points.forEach((point, i) => {
        point.x += point.vx;
        point.y += point.vy;

        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;

        points.forEach((otherPoint, j) => {
          if (i === j) return;

          const dx = otherPoint.x - point.x;
          const dy = otherPoint.y - point.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            const alpha = (1 - distance / 200) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(52, 211, 153, ${alpha})`;
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            ctx.stroke();
          }
        });
      });

      time += 0.005;
      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
}
