// items.js
const ITEM_CATALOG = {
    "CCTV": [
        { code: "CCTV001", description: "CCTV Camera 2MP", price: 0 },
        { code: "CCTV002", description: "CCTV Camera 5MP", price: 0 },
        { code: "CCTV003", description: "DVR 4 Channel", price: 0 },
        { code: "CCTV004", description: "DVR 8 Channel", price: 0 },
        { code: "CCTV005", description: "DVR 16 Channel", price: 0 },
        { code: "CCTV006", description: "NVR 8 Channel", price: 0 },
        { code: "CCTV007", description: "NVR 16 Channel", price: 0 },
        { code: "CCTV008", description: "CCTV Power Supply 12V 5A", price: 0 },
        { code: "CCTV009", description: "CCTV Power Supply 12V 10A", price: 0 },
        { code: "CCTV010", description: "Hard Disk 1TB Surveillance", price: 0 },
        { code: "CCTV011", description: "Hard Disk 2TB Surveillance", price: 0 },
        { code: "CCTV012", description: "HDMI Cable 5m", price: 0 },
        { code: "CCTV013", description: "HDMI Cable 10m", price: 0 },
        { code: "CCTV014", description: "HDMI Cable 15m", price: 0 },
        { code: "CCTV015", description: "BNC Connectors (Pack of 10)", price: 0 },
        { code: "CCTV016", description: "DC Jack (Pack of 10)", price: 0 },
        { code: "CCTV017", description: "CAT6 Cable (1m)", price: 0 },
        { code: "CCTV018", description: "CAT6 Cable Roll (305m)", price: 0 },
        { code: "CCTV019", description: "RG59 Coaxial Cable Roll", price: 0 },
        { code: "CCTV020", description: "PVC Trunking 25mm", price: 0 },
        { code: "CCTV021", description: "PVC Trunking 40mm", price: 0 },
        { code: "CCTV022", description: "Wall Mount Bracket for Camera", price: 0 },
        { code: "CCTV023", description: "PoE Injector", price: 0 },
        { code: "CCTV024", description: "PoE Switch 4 Port", price: 0 },
        // අලුතින් එකතු කළ අයිතම
        { code: "CCTV025", description: "LED Monitor 17\"", price: 0 },
        { code: "CCTV026", description: "LED Monitor 19\"", price: 0 },
        { code: "CCTV027", description: "Power Supply 12V", price: 0 },
        { code: "CCTV028", description: "Wall Mount", price: 0 },
        { code: "CCTV029", description: "DVR (Generic)", price: 0 }
    ],

    "Electrical Wiring": [
        { code: "ELEC001", description: "Electrical Wire 1.5mm Roll", price: 0 },
        { code: "ELEC002", description: "Electrical Wire 2.5mm Roll", price: 0 },
        { code: "ELEC003", description: "Electrical Wire 4mm Roll", price: 0 },
        { code: "ELEC004", description: "MCB 6A", price: 0 },
        { code: "ELEC005", description: "MCB 32A", price: 0 },
        { code: "ELEC006", description: "Double Pole Isolator", price: 0 },
        { code: "ELEC007", description: "RCCB 30mA", price: 0 },
        { code: "ELEC008", description: "Socket Outlet 13A", price: 0 },
        { code: "ELEC009", description: "Light Switch 1 Gang", price: 0 },
        { code: "ELEC010", description: "Light Switch 2 Gang", price: 0 },
        { code: "ELEC011", description: "Conduit Pipe 20mm", price: 0 },
        { code: "ELEC012", description: "Conduit Pipe 25mm", price: 0 },
        { code: "ELEC013", description: "Junction Box", price: 0 },
        { code: "ELEC014", description: "PVC Trunking 25mm", price: 0 },
        { code: "ELEC015", description: "PVC Trunking 40mm", price: 0 },
        { code: "ELEC016", description: "Bulb Holder", price: 0 },
        { code: "ELEC017", description: "LED Bulb 9W", price: 0 },
        { code: "ELEC018", description: "LED Bulb 12W", price: 0 },
        { code: "ELEC019", description: "Ceiling Fan", price: 0 },
        { code: "ELEC020", description: "Exhaust Fan", price: 0 }
    ],

    "Computer Repair": [
        { code: "COMP001", description: "SSD 120GB", price: 0 },
        { code: "COMP002", description: "SSD 240GB", price: 0 },
        { code: "COMP003", description: "SSD 480GB", price: 0 },
        { code: "COMP004", description: "HDD 500GB", price: 0 },
        { code: "COMP005", description: "HDD 1TB", price: 0 },
        { code: "COMP006", description: "RAM 4GB DDR3", price: 0 },
        { code: "COMP007", description: "RAM 8GB DDR4", price: 0 },
        { code: "COMP008", description: "Laptop Keyboard", price: 0 },
        { code: "COMP009", description: "Laptop Charger 65W", price: 0 },
        { code: "COMP010", description: "Laptop Charger 90W", price: 0 },
        { code: "COMP011", description: "Mouse USB", price: 0 },
        { code: "COMP012", description: "Keyboard USB", price: 0 },
        { code: "COMP013", description: "Windows 10 License", price: 0 },
        { code: "COMP014", description: "Windows 11 License", price: 0 },
        { code: "COMP015", description: "Thermal Paste", price: 0 },
        { code: "COMP016", description: "Power Supply 450W", price: 0 },
        { code: "COMP017", description: "Power Supply 650W", price: 0 },
        { code: "COMP018", description: "Monitor LED 19\"", price: 0 },
        { code: "COMP019", description: "Monitor LED 22\"", price: 0 }
    ]
};

// Optional: Load custom items from localStorage if available
function getCatalog() {
    const customItems = localStorage.getItem('svc_items');
    if (customItems) {
        const parsedItems = JSON.parse(customItems);
        return { ...ITEM_CATALOG, ...parsedItems };
    }
    return ITEM_CATALOG;
}