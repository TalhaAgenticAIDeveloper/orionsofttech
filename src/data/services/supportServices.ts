import type { SupportService } from '@/types';

export const supportServices: SupportService[] = [
  {
    id: 'support-hardware-installation',
    slug: 'hardware-installation',
    name: 'Hardware Installation',
    description:
      'Professional deployment and installation of IT hardware including workstations, servers, networking equipment, and peripherals. Our certified technicians ensure every component is properly configured, tested, and ready for production use from day one.',
    icon: 'HardDrive',
    features: [
      'Workstation and desktop deployment with OS and software pre-configuration',
      'Server rack mounting, cabling, and initial hardware diagnostics',
      'Peripheral setup including printers, scanners, and multi-function devices',
      'Component upgrades such as RAM, storage, and GPU installations',
      'Post-installation hardware verification and burn-in testing',
      'Comprehensive documentation of installed hardware and configurations',
    ],
  },
  {
    id: 'support-software-installation',
    slug: 'software-installation',
    name: 'Software Installation',
    description:
      'End-to-end software deployment services covering licensed business applications, productivity suites, security tools, and custom enterprise software. We handle licensing, configuration, and user setup to ensure a smooth rollout across your organization.',
    icon: 'Download',
    features: [
      'Enterprise software deployment across multiple endpoints',
      'License management and activation for commercial applications',
      'Custom configuration of ERP, CRM, and business-specific software',
      'Security software installation including antivirus and endpoint protection',
      'Database engine and development environment setup',
      'User account provisioning and access permission configuration',
    ],
  },
  {
    id: 'support-os-installation',
    slug: 'os-installation',
    name: 'Operating System Installation',
    description:
      'Clean installation and configuration of desktop and server operating systems including Windows, Linux, and macOS. We handle driver installation, system optimization, security hardening, and domain integration so your machines are production-ready immediately.',
    icon: 'Monitor',
    features: [
      'Clean OS installation with latest patches and security updates',
      'Driver installation and hardware compatibility verification',
      'Active Directory and domain joining configuration',
      'System optimization and performance tuning for your workload',
      'Dual-boot and virtualization host OS setup where required',
      'Data migration from previous installations when applicable',
    ],
  },
  {
    id: 'support-server-setup',
    slug: 'server-setup',
    name: 'Server Setup & Configuration',
    description:
      'Complete server provisioning services from physical rack installation to operating system deployment, role configuration, and service activation. We configure file servers, application servers, domain controllers, and virtualization hosts to enterprise standards.',
    icon: 'Server',
    features: [
      'Physical server rack mounting, power, and network cabling',
      'Windows Server and Linux server OS installation and hardening',
      'Active Directory, DNS, DHCP, and Group Policy configuration',
      'Virtualization platform deployment with Hyper-V or VMware ESXi',
      'RAID configuration, storage provisioning, and backup scheduling',
      'Performance benchmarking and stress testing before handover',
    ],
  },
  {
    id: 'support-network-installation',
    slug: 'network-installation',
    name: 'Network Installation & Configuration',
    description:
      'Design and deployment of structured network infrastructure including LAN, WAN, Wi-Fi, and internet connectivity. We handle everything from cable runs and patch panels to switch configuration, VLAN segmentation, and firewall rule setup.',
    icon: 'Network',
    features: [
      'Structured cabling with Cat6/Cat6a and fiber optic installation',
      'Managed switch and router configuration with VLAN segmentation',
      'Enterprise Wi-Fi deployment with access point placement optimization',
      'Firewall setup with security policies and VPN configuration',
      'Network performance testing, throughput analysis, and documentation',
      'ISP coordination and internet gateway configuration',
    ],
  },
  {
    id: 'support-cctv-installation',
    slug: 'cctv-installation',
    name: 'CCTV Installation',
    description:
      'Professional surveillance system installation covering IP cameras, NVRs, DVRs, and remote monitoring setup. Our technicians ensure optimal camera placement, proper cabling, and reliable recording configurations tailored to your security requirements.',
    icon: 'Camera',
    features: [
      'Site survey and camera placement planning for maximum coverage',
      'IP camera and analog camera mounting and wiring',
      'NVR and DVR setup with storage allocation and recording schedules',
      'Remote viewing configuration for mobile and desktop access',
      'Motion detection, alert, and notification rule configuration',
      'Night vision calibration and weatherproofing for outdoor cameras',
    ],
  },
  {
    id: 'support-biometric-installation',
    slug: 'biometric-installation',
    name: 'Biometric System Installation',
    description:
      'Deployment of biometric attendance and access control systems including fingerprint readers, facial recognition terminals, and card-based access points. We integrate these systems with your existing infrastructure and HR or security management software.',
    icon: 'Fingerprint',
    features: [
      'Biometric terminal mounting and power/network connectivity',
      'Fingerprint, facial recognition, and card reader enrollment setup',
      'Integration with attendance management and payroll software',
      'Access control rule configuration for doors and restricted areas',
      'Multi-site synchronization for centralized attendance tracking',
      'User training on enrollment, reporting, and daily operations',
    ],
  },
  {
    id: 'support-printer-installation',
    slug: 'printer-installation',
    name: 'Printer Installation & Configuration',
    description:
      'Setup and configuration of printers, multifunction devices, and scanners across your office environment. We handle network printer sharing, driver deployment, print queue management, and scanning workflows to ensure seamless document handling.',
    icon: 'Printer',
    features: [
      'Network and USB printer installation with driver deployment',
      'Print server configuration for centralized print management',
      'Scan-to-email and scan-to-folder workflow setup',
      'Multi-function device configuration for print, copy, scan, and fax',
      'Secure print and user-based access control configuration',
      'Toner and consumable lifecycle guidance and supplier setup',
    ],
  },
  {
    id: 'support-system-integration',
    slug: 'system-integration',
    name: 'System Integration',
    description:
      'Bringing together disparate IT systems, platforms, and applications into a unified, interoperable ecosystem. We ensure your hardware, software, and network components work together seamlessly, eliminating data silos and operational inefficiencies.',
    icon: 'Layers',
    features: [
      'Cross-platform integration between legacy and modern systems',
      'API-based connectivity between business applications',
      'Database synchronization and data migration between platforms',
      'Single sign-on and identity management integration',
      'Hardware-to-software integration for IoT and industrial systems',
      'Workflow automation across integrated systems',
    ],
  },
  {
    id: 'support-troubleshooting',
    slug: 'troubleshooting',
    name: 'Troubleshooting',
    description:
      'Rapid diagnosis and resolution of hardware, software, and network issues affecting your business operations. Our experienced engineers systematically identify root causes and implement lasting fixes rather than temporary workarounds.',
    icon: 'Wrench',
    features: [
      'Hardware diagnostics for desktops, laptops, servers, and peripherals',
      'Software conflict resolution and application crash analysis',
      'Network connectivity, latency, and packet loss troubleshooting',
      'Blue screen, boot failure, and operating system recovery',
      'Email, printing, and shared resource access issue resolution',
      'Root cause analysis and preventive recommendations',
    ],
  },
  {
    id: 'support-technical-maintenance',
    slug: 'technical-maintenance',
    name: 'Technical Maintenance',
    description:
      'Scheduled preventive maintenance programs to keep your IT infrastructure running at peak performance. Regular system health checks, firmware updates, security patching, and hardware cleaning reduce downtime and extend equipment lifespan.',
    icon: 'Settings',
    features: [
      'Scheduled preventive maintenance visits on agreed intervals',
      'Firmware and BIOS updates for servers, switches, and appliances',
      'Operating system patching and security update management',
      'Hardware cleaning, thermal management, and component inspection',
      'Storage health monitoring and proactive disk replacement',
      'Detailed maintenance reports with health status and recommendations',
    ],
  },
  {
    id: 'support-remote-support',
    slug: 'remote-support',
    name: 'Remote Technical Support',
    description:
      'Immediate technical assistance delivered remotely via secure screen sharing and remote access tools. Our support engineers diagnose and resolve software, configuration, and network issues without the delay of an on-site visit, minimizing your downtime.',
    icon: 'Headset',
    features: [
      'Secure remote desktop access for real-time troubleshooting',
      'Software installation, update, and configuration changes remotely',
      'Email and account setup, password resets, and access management',
      'Guided troubleshooting with screen sharing for end users',
      'Remote server and network device monitoring and management',
      'Priority escalation to on-site support when remote resolution is insufficient',
    ],
  },
  {
    id: 'support-onsite-assistance',
    slug: 'onsite-assistance',
    name: 'On-Site Technical Assistance',
    description:
      'Dispatching qualified engineers directly to your premises for hands-on technical support. Whether it is a complex hardware failure, a major network outage, or a large-scale deployment, our on-site team resolves issues that require physical presence efficiently.',
    icon: 'MapPin',
    features: [
      'Certified engineers dispatched to your location for hands-on support',
      'Hardware repair and component replacement on-site',
      'Network infrastructure inspection, testing, and repair',
      'Large-scale equipment deployment and office IT setup',
      'Emergency response for critical system failures and outages',
      'Post-resolution documentation and knowledge transfer to your team',
    ],
  },
  {
    id: 'support-post-installation',
    slug: 'post-installation-support',
    name: 'Post-Installation Support',
    description:
      'Continued technical assistance after project completion to ensure smooth adoption and long-term reliability. We provide staff training, performance monitoring, configuration adjustments, and warranty coordination during the critical stabilization period.',
    icon: 'ShieldCheck',
    features: [
      'Dedicated support window after project deployment and handover',
      'End-user training sessions for new systems and applications',
      'Performance monitoring and optimization during the stabilization phase',
      'Configuration fine-tuning based on real-world usage patterns',
      'Warranty claim coordination with hardware and software vendors',
      'Transition planning to ongoing maintenance or managed services',
    ],
  },
];

export function getSupportServiceBySlug(slug: string): SupportService | undefined {
  return supportServices.find((s) => s.slug.toLowerCase() === slug.toLowerCase());
}

export function getAllSupportServices(): SupportService[] {
  return supportServices;
}

export function getRelatedSupportServices(currentSlug: string, count = 3): SupportService[] {
  return supportServices.filter((s) => s.slug !== currentSlug).slice(0, count);
}

