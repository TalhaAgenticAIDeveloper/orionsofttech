export interface HardwareCategory {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  image: string;
  iconName: string;
  equipmentProvided: string[];
  brands: string[];
  servicesIncluded: string[];
}

export const hardwareCategories: HardwareCategory[] = [
  {
    id: 'networking-equipment',
    slug: 'networking-equipment',
    name: 'Networking & Infrastructure',
    tagline: 'Enterprise Connectivity & Data Cabling',
    shortDescription:
      'Complete wired and wireless networking equipment, from enterprise managed switches and core routers to structured Cat6/fiber cabling and server racks.',
    image: '/images/categories/networking.jpg',
    iconName: 'Network',
    equipmentProvided: [
      '24 & 48-Port Gigabit & 10G Managed PoE Switches',
      'Enterprise Core Routers & Security UTM Firewalls',
      'Cat6, Cat6A & Fiber Optic Cable Rolls & Patch Leads',
      'High-Density Patch Panels, Keystones & Cable Organizers',
      'Enterprise Wireless Access Points & Mesh Controllers',
      'Floor-Standing & Wall-Mount Server Rack Cabinets',
      'SFP / SFP+ Optical Transceivers & Media Converters',
    ],
    brands: ['Cisco', 'MikroTik', 'Ubiquiti UniFi', 'TP-Link Omada', 'D-Link', 'Schneider'],
    servicesIncluded: [
      'Structured on-site data & voice cabling',
      'Rack dressing, patch panel punch-down & labeling',
      'VLAN segmentation, routing & firewall rules configuration',
      'Wi-Fi coverage heatmapping & access point deployment',
    ],
  },
  {
    id: 'laptops-and-computers',
    slug: 'laptops',
    name: 'Computers, Laptops & Workstations',
    tagline: 'Business Computing & Productivity Hardware',
    shortDescription:
      'Tier-one corporate laptops, desktop PCs, all-in-one machines, and specialized engineering workstations configured for business durability.',
    image: '/images/categories/computers.jpg',
    iconName: 'Laptop',
    equipmentProvided: [
      'Business Laptops (Dell Latitude, HP EliteBook, Lenovo ThinkPad)',
      'Corporate Desktop PCs & Small Form Factor (SFF) Units',
      'All-in-One (AIO) Workstations with Borderless Displays',
      'High-Performance CAD, 3D Rendering & Engineering Workstations',
      'Ultra-Compact Mini PCs & Virtual Desktop Thin Clients',
      'Genuine Windows 11 Pro OEM & Enterprise Licensing',
    ],
    brands: ['Dell', 'HP', 'Lenovo', 'Apple', 'ASUS'],
    servicesIncluded: [
      'Bulk OS installation & domain joining',
      'RAM, NVMe SSD & graphics card upgrades',
      'Standardized corporate software image deployment',
      'Full hardware testing & nationwide secure delivery',
    ],
  },
  {
    id: 'servers-and-server-components',
    slug: 'servers-and-server-components',
    name: 'Servers & Data Center Storage',
    tagline: 'High-Availability Enterprise Compute',
    shortDescription:
      'Rackmount and tower servers, hot-plug storage arrays, redundant power supplies, and multi-bay NAS systems for critical enterprise workloads.',
    image: '/images/categories/servers.jpg',
    iconName: 'Server',
    equipmentProvided: [
      '1U, 2U & 4U Enterprise Rackmount Servers',
      'Quiet Standalone Tower Servers for Branch Offices',
      'Multi-Bay Network Attached Storage (NAS & SAN Solutions)',
      'Enterprise SAS, SATA & NVMe High-Endurance Drives',
      'Hot-Plug Redundant Server Power Supplies & Rail Kits',
      '1U Rackmount KVM Consoles with Integrated LCD Displays',
    ],
    brands: ['Dell PowerEdge', 'HP ProLiant', 'Synology', 'Seagate Exos', 'Western Digital Red'],
    servicesIncluded: [
      'RAID array configuration (RAID 1, 5, 10)',
      'Windows Server / VMware ESXi / Proxmox hypervisor setup',
      'Automated local & off-site backup configuration',
      'Server cabinet mounting & clean cable routing',
    ],
  },
  {
    id: 'cctv-and-surveillance',
    slug: 'cctv-and-surveillance',
    name: 'CCTV & Security Surveillance',
    tagline: 'High-Definition Visual Monitoring & Recording',
    shortDescription:
      'IP dome, bullet, and PTZ optical cameras with Network Video Recorders (NVRs) and 24/7 continuous video surveillance storage.',
    image: '/images/categories/cctv.jpg',
    iconName: 'Camera',
    equipmentProvided: [
      '4MP & 8MP 4K ColorVu IP Dome & Bullet Cameras',
      'Long-Range Optical Zoom PTZ Speed Dome Cameras',
      '8, 16, 32 & 64 Channel Network Video Recorders (NVRs)',
      'Dedicated 24/7 Surveillance Hard Drives (WD Purple, SkyHawk)',
      'PoE Network Switches & Power Adapters for Cameras',
      'Weatherproof Junction Boxes, Poles & Mounting Brackets',
    ],
    brands: ['Hikvision', 'Dahua', 'Uniview', 'Western Digital Purple'],
    servicesIncluded: [
      'Camera position planning & on-site cabling',
      'NVR installation, HDD formatting & motion detection zones',
      'Mobile app & desktop remote viewing live setup',
      'Night vision tuning & scheduled recording backup',
    ],
  },
  {
    id: 'biometric-access-control',
    slug: 'biometric-access-control',
    name: 'Biometrics & Access Control',
    tagline: 'Time Attendance & Automated Door Security',
    shortDescription:
      'Facial recognition, fingerprint attendance terminals, heavy-duty electromagnetic door locks, and RFID smart card solutions.',
    image: '/images/categories/biometrics.jpg',
    iconName: 'Fingerprint',
    equipmentProvided: [
      'AI Facial Recognition & Touchless Palm Attendance Terminals',
      'Optical Fingerprint Time & Attendance Punch Machines',
      '600 lbs Heavy-Duty Electromagnetic & Drop-Bolt Door Locks',
      'Proximity RFID Cards (125kHz & 13.56MHz) & Key Fobs',
      'Emergency Push-to-Exit Buttons & Power Supply Controllers',
    ],
    brands: ['ZKTeco', 'Hikvision', 'Realand'],
    servicesIncluded: [
      'Glass, wooden & metal door magnetic lock mounting',
      'Attendance software installation & payroll integration',
      'Employee face & fingerprint enrollment training',
      'Multi-branch cloud attendance synchronization',
    ],
  },
  {
    id: 'power-backup-solutions',
    slug: 'power-backup-solutions',
    name: 'UPS & Power Backup Systems',
    tagline: 'Zero-Downtime Clean Electricity Protection',
    shortDescription:
      'Online double-conversion UPS systems, server backup batteries, industrial voltage stabilizers, and surge protectors for IT reliability.',
    image: '/images/categories/ups-power.jpg',
    iconName: 'Zap',
    equipmentProvided: [
      'Online Double-Conversion Rack & Tower UPS (1kVA to 20kVA)',
      'Line-Interactive Workstation & Desktop UPS Units',
      'Long-Backup AGM / Gel VRLA Dry Battery Packs',
      'Servo-Motor Automatic Voltage Stabilizers (1kVA to 30kVA)',
      'Rackmount Power Distribution Units (PDUs) & Surge Strips',
    ],
    brands: ['APC by Schneider Electric', 'Emerson / Vertiv', 'Stavol', 'CSB Battery'],
    servicesIncluded: [
      'Electrical load calculation & runtime assessment',
      'On-site UPS electrical connection & breaker installation',
      'Battery health impedance testing & replacement',
      'SNMP network management card setup for automatic shutdown',
    ],
  },
  {
    id: 'telecom-and-voip',
    slug: 'telecom-and-voip',
    name: 'Telecommunication & IP Telephony (VoIP)',
    tagline: 'Crystal-Clear Enterprise Voice & Intercom',
    shortDescription:
      'Modern IP PBX phone exchange systems, executive desk phones, analog telephone adapters (ATAs), and commercial two-way radios.',
    image: '/images/categories/telecom-voip.jpg',
    iconName: 'PhoneCall',
    equipmentProvided: [
      'Appliance-Based IP PBX Systems (Call Recording, IVR, Auto-Attendant)',
      'Gigabit Executive & Staff SIP VoIP Desk Phones',
      'Analog Telephone Adapters (ATA) & GSM Voice Gateways',
      'Multi-Party Conference Speakerphones & Intercoms',
      'Commercial UHF / VHF Two-Way Radios (Walkie Talkies)',
    ],
    brands: ['Grandstream', 'Yealink', 'Fanvil', 'Motorola', 'Cisco'],
    servicesIncluded: [
      'Extension numbering & interactive voice response (IVR) setup',
      'SIP trunk configuration & international call routing',
      'Mobile app softphone integration for remote staff',
      'Intercom & PA system building wiring',
    ],
  },
  {
    id: 'pos-and-retail-solutions',
    slug: 'pos-and-retail-solutions',
    name: 'POS & Retail Equipment',
    tagline: 'Complete Point-of-Sale Hardware',
    shortDescription:
      'Touchscreen POS terminals, high-speed thermal receipt printers, 1D/2D barcode scanners, and steel electronic cash drawers.',
    image: '/images/categories/pos-retail.jpg',
    iconName: 'Store',
    equipmentProvided: [
      'All-in-One Capacitive Touchscreen POS Terminal Systems',
      'Handheld & Hands-Free 1D / 2D Omni-Directional Barcode Scanners',
      '80mm Thermal Receipt Printers with Auto-Cutter (USB/LAN)',
      'Heavy-Duty Steel RJ11 Electronic Cash Drawers',
      'Direct Thermal & Thermal Transfer Barcode Label Printers',
    ],
    brands: ['Sunmi', 'Zebra', 'Epson', 'Xprinter', 'Honeywell'],
    servicesIncluded: [
      'Driver installation & POS billing software integration',
      'Thermal receipt layout design & custom logo printing',
      'Barcode label printer calibration & sticker roll setup',
      'Countertop neat cable management',
    ],
  },
  {
    id: 'computer-components',
    slug: 'computer-components',
    name: 'Components, Monitors & Peripherals',
    tagline: 'Hardware Upgrades & Workspace Accessories',
    shortDescription:
      'Office monitors, universal docking stations, DDR4/DDR5 memory, NVMe SSDs, and IT maintenance toolkits for technicians.',
    image: '/images/categories/components.jpg',
    iconName: 'Cpu',
    equipmentProvided: [
      'IPS Professional Office Monitors (24", 27", 32" 4K Displays)',
      'USB-C & Thunderbolt Universal Laptop Docking Stations',
      'High-Speed DDR4 & DDR5 RAM Modules for Workstations',
      'M.2 NVMe PCIe Gen4 Solid State Drives & Portable SSDs',
      'Precision Hardware Repair Toolkits, Crimpers & Cable Testers',
    ],
    brands: ['Samsung', 'Kingston', 'Crucial', 'Dell', 'Ugreen', 'Klein Tools'],
    servicesIncluded: [
      'Desk dual-monitor arm mounting & setup',
      'Workstation RAM & SSD cloning and upgrading',
      'Multi-port docking station display configuration',
      'Component diagnostics & thermal repasting',
    ],
  },
];

