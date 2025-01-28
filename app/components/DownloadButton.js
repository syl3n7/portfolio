'use client'

import { useState } from 'react';
import { Button, useToast } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';

export default function DownloadButton({ gameName }) {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://steelchunk.eu/api/games/${gameName.toLowerCase()}`);
      if (!response.ok) throw new Error('Download failed');
      const data = await response.json();
      
      // Create and trigger download
      const link = document.createElement('a');
      link.href = data.url;
      link.setAttribute('download', `${gameName}.zip`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Download started",
        description: "Your game download should begin shortly",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (err) {
      console.error('Download error:', err);
      toast({
        title: "Download failed", 
        description: err.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      isLoading={isLoading}
      loadingText="Downloading..."
      leftIcon={<DownloadIcon />}
      colorScheme="purple"
    >
      Download Game
    </Button>
  );
}