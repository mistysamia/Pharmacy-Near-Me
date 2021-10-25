import { useEffect } from "react";
import { useState } from "react"

const usePharmacies = () => {
    const [pharmacies, setPharmacies] = useState([]);
    useEffect(() => {
        fetch('./pharmacy.json')
            .then(res => res.json())
            .then(data => setPharmacies(data));
    }, []);
    return [pharmacies, setPharmacies];
}

export default usePharmacies;