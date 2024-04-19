'use client';

import { useEffect, useState } from 'react';

const ModalProviders = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <></>;
};

export default ModalProviders;
