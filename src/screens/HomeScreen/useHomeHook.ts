import { useEffect, useState } from "react";
import { IpInfo } from "../../utils/types";
import { fetchIpInfo } from "../../api/ipService";

const useHomeHook = () => {
    const [ipInfo, setIpInfo] = useState<IpInfo | null>(null);
    const [ip, setIp] = useState<string>('');
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
  
    const fetchData = async (ip = '') => {
      try {
        const info = await fetchIpInfo(ip);
        setIpInfo(info);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const handleSearch = async () => {
      setLoading(true);
      fetchData(ip)
    };
  
    return { ipInfo, ip, setIp, handleSearch, selectedImage, setSelectedImage, loading };
}

export default useHomeHook;