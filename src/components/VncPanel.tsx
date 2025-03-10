import React, { useEffect, useRef, useState } from "react";

const VncPanel: React.FC<{ url: string }> = ({ url }) => {
  const vncContainerRef = useRef<HTMLDivElement>(null);
  const rfbRef = useRef<any>(null);
  const [RFB, setRFB] = useState<any>(null);

  useEffect(() => {
    import("@novnc/novnc").then((noVNC) => {
      setRFB(() => noVNC.RFB);
    });
  }, []);

  useEffect(() => {
    if (RFB && vncContainerRef.current) {
      rfbRef.current = new RFB(vncContainerRef.current, url, {
        credentials: { password: "your-vnc-password" },
      });

      rfbRef.current.scaleViewport = true;
      rfbRef.current.viewOnly = false;
    }

    return () => {
      if (rfbRef.current) {
        rfbRef.current.disconnect();
      }
    };
  }, [RFB, url]);

  return (
    <div className="w-full h-[500px] bg-black rounded-lg shadow-md border border-gray-700">
      <div ref={vncContainerRef} className="w-full h-full"></div>
    </div>
  );
};

export default VncPanel;
