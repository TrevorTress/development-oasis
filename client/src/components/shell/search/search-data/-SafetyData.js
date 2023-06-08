// --safety-color: #dcc132db;

// 	--equipment-color: #dc8823db;

// 	--operation-color: #076407b5;

// 	--maintenance-color: #0d6efda8;

// 	--troubleshooting-color: #920e0ead;

// 	--appendix-color: #4c1b7dd1;

const SearchData = [
	{
		section: 'Safety',
		page: 'Safety Overview',
		tab: 'Safety Introduction',
		link: 'http://localhost:3001/smart-inspect/warren/safety/safety-overview/?tab=Safety Overview',
		color: '#dcc132db',
	},
	{
		section: 'Safety',
		page: 'Safety Overview',
		tab: 'Notices',
		link: 'http://localhost:3001/smart-inspect/warren/safety/safety-overview/?tab=Notices',
		color: '#dcc132db',
	},
	{
		section: 'Safety',
		page: 'Safety Overview',
		tab: 'General Safety',
		link: 'http://localhost:3001/smart-inspect/warren/safety/safety-overview/?tab=General Safety',
		color: '#dcc132db',
	},
	{
		section: 'Safety',
		page: 'Safety Overview',
		tab: 'Personal Safety',
		link: 'http://localhost:3001/smart-inspect/warren/safety/safety-overview/?tab=Personal Safety',
		color: '#dcc132db',
	},
	{
		section: 'Safety',
		page: 'Safety Overview',
		tab: 'Work Area Safety',
		link: 'http://localhost:3001/smart-inspect/warren/safety/safety-overview/?tab=Work Area Safety',
		color: '#dcc132db',
	},
	{
		section: 'Safety',
		page: 'Safety Overview',
		tab: 'LOTO',
		link: 'http://localhost:3001/smart-inspect/warren/safety/safety-overview/?tab=LOTO',
		color: '#dcc132db',
	},
	///////////////////////////////////////////////////////////////////////////////////
	{
		section: 'Safety',
		page: 'Control Safety',
		tab: 'Electrical Safety',
		link: 'http://localhost:3001/smart-inspect/warren/safety/control-safety/?tab=Electrical Safety',
		color: '#dcc132db',
	},
	{
		section: 'Safety',
		page: 'Control Safety',
		tab: 'Mechanical Safety',
		link: 'http://localhost:3001/smart-inspect/warren/safety/control-safety/?tab=Mechanical Safety',
		color: '#dcc132db',
	},
	///////////////////////////////////////////////////////////////////////////////////
	{
		section: 'Safety',
		page: 'Safety Devices',
		tab: 'Emergency Stop Pushbuttons',
		link: 'http://localhost:3001/smart-inspect/warren/safety/safety-devices',
		color: '#dcc132db',
	},
	///////////////////////////////////////////////////////////////////////////////////
	{
		section: 'Safety',
		page: 'Equipment Lockout',
		tab: 'Equipment Lockout',
		link: 'http://localhost:3001/smart-inspect/warren/safety/equipment-lockout',
		color: '#dcc132db',
	},
	{
		section: 'Safety',
		page: 'Energy Sources',
		tab: 'PDP Main Power Disconnect',
		keywords: ['PDP Main Power Disconnect'],
		link: 'http://localhost:3001/smart-inspect/warren/safety/energy-sources',
		color: '#dcc132db',
	},
	///////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////
	{
		section: 'Equipment',
		page: 'Equipment Overview',
		tab: 'SMARTInspect Layout',
		link: 'http://localhost:3001/smart-inspect/warren/equipment/equipment-overview/?tab=SMARTInspect Layout',
		color: '#dc8823db',
	},
	{
		section: 'Equipment',
		page: 'Equipment Overview',
		tab: 'Sequence of Operations',
		link: 'http://localhost:3001/smart-inspect/warren/equipment/equipment-overview/?tab=Sequence of Operations',
		color: '#dc8823db',
	},
	{
		section: 'Equipment',
		page: 'Assemblies',
		tab: 'Inspection Frame Assembly',
		link: 'http://localhost:3001/smart-inspect/warren/equipment/assemblies/?tab=Inspection Frame Assembly',
		color: '#dc8823db',
	},
	{
		section: 'Equipment',
		page: 'Assemblies',
		tab: 'Camera Mounting Assemblies',
		link: 'http://localhost:3001/smart-inspect/warren/equipment/assemblies/?tab=Camera Mounting Assemblies',
		color: '#dc8823db',
	},
	{
		section: 'Equipment',
		page: 'Assemblies',
		tab: 'Camera Assemblies',
		link: 'http://localhost:3001/smart-inspect/warren/equipment/assemblies/?tab=Camera Assemblies',
		color: '#dc8823db',
	},
	{
		section: 'Equipment',
		page: 'Assemblies',
		tab: 'Lighting Assemblies',
		link: 'http://localhost:3001/smart-inspect/warren/equipment/assemblies/?tab=Lighting Assemblies',
		color: '#dc8823db',
	},
	///////////////////////////////////////////////////////////////////////////////////
	{
		section: 'Equipment',
		page: 'Electrical Panels',
		tab: 'PDP',
		link: 'http://localhost:3001/smart-inspect/warren/equipment/electrical-panels/?tab=PDP',
		color: '#dc8823db',
	},
	{
		section: 'Equipment',
		page: 'Electrical Panels',
		tab: 'Transformer Stand',
		link: 'http://localhost:3001/smart-inspect/warren/equipment/electrical-panels/?tab=Transformer Stand',
		color: '#dc8823db',
	},
	{
		section: 'Equipment',
		page: 'Electrical Panels',
		tab: 'PAC',
		link: 'http://localhost:3001/smart-inspect/warren/equipment/electrical-panels/?tab=PAC',
		color: '#dc8823db',
	},
	{
		section: 'Equipment',
		page: 'Electrical Panels',
		tab: 'Server Panel',
		link: 'http://localhost:3001/smart-inspect/warren/equipment/electrical-panels/?tab=Server Panel',
		color: '#dc8823db',
	},
	{
		section: 'Equipment',
		page: 'Electrical Panels',
		tab: 'Trigger Panels',
		link: 'http://localhost:3001/smart-inspect/warren/equipment/electrical-panels/?tab=Trigger Panels',
		color: '#dc8823db',
	},
	///////////////////////////////////////////////////////////////////////////////////
	{
		section: 'Equipment',
		page: 'System Control',
		tab: 'HMI',
		link: 'http://localhost:3001/smart-inspect/warren/equipment/system-control/?tab=HMI',
		color: '#dc8823db',
	},
	{
		section: 'Equipment',
		page: 'System Control',
		tab: 'Buttons and Indicators',
		link: 'http://localhost:3001/smart-inspect/warren/equipment/system-control/?tab=Buttons and Indicators',
		color: '#dc8823db',
	},
	{
		section: 'Equipment',
		page: 'System Control',
		tab: 'Inspection Monitor',
		link: 'http://localhost:3001/smart-inspect/warren/equipment/system-control/?tab=Inspection Monitor',
		color: '#dc8823db',
	},
	///////////////////////////////////////////////////////////////////////////////////
	{
		section: 'Equipment',
		page: 'Part / Skid Detect',
		tab: 'Encoder Wheel Line Trackers',
		link: 'http://localhost:3001/smart-inspect/warren/equipment/part-detect/?tab=Encoder Wheel Line Trackers',
		color: '#dc8823db',
	},
	{
		section: 'Equipment',
		page: 'Part / Skid Detect',
		tab: 'AB Skid Detect Switch Bracket',
		link: 'http://localhost:3001/smart-inspect/warren/equipment/part-detect/?tab=AB Skid Detect Switch Bracket',
		color: '#dc8823db',
	},
	{
		section: 'Equipment',
		page: 'Part / Skid Detect',
		tab: 'Part Detect Photoeye Assembly',
		link: 'http://localhost:3001/smart-inspect/warren/equipment/part-detect/?tab=Part Detect Photoeye Assembly',
		color: '#dc8823db',
	},
	{
		section: 'Equipment',
		page: 'Part / Skid Detect',
		tab: 'Door Open Laser Assembly',
		link: 'http://localhost:3001/smart-inspect/warren/equipment/part-detect/?tab=Door Open Laser Assembly',
		color: '#dc8823db',
	},
	///////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////
	{
		section: 'Maintenance',
		page: 'Maintenance Overview',
		tab: 'Maintenance Overview',
		link: 'http://localhost:3001/smart-inspect/warren/maintenance/maintenance-overview/',
		color: '#0d6efda8',
	},
	///////////////////////////////////////////////////////////////////////////////////
	{
		section: 'Maintenance',
		page: 'Maintenance Safety',
		tab: 'General Maintenance Safety',
		link: 'http://localhost:3001/smart-inspect/warren/maintenance/maintenance-safety/?tab=General Maintenance Safety',
		color: '#0d6efda8',
	},
	{
		section: 'Maintenance',
		page: 'Maintenance Safety',
		tab: 'Mechanical Maintenance Safety',
		link: 'http://localhost:3001/smart-inspect/warren/maintenance/maintenance-safety/?tab=Mechanical Maintenance Safety',
		color: '#0d6efda8',
	},
	{
		section: 'Maintenance',
		page: 'Maintenance Safety',
		tab: 'Electrical Maintenance Safety',
		link: 'http://localhost:3001/smart-inspect/warren/maintenance/maintenance-safety/?tab=Electrical Maintenance Safety',
		color: '#0d6efda8',
	},
	///////////////////////////////////////////////////////////////////////////////////
	{
		section: 'Maintenance',
		page: 'Maintenance Lockout',
		tab: 'Maintenance Lockout',
		link: 'http://localhost:3001/smart-inspect/warren/maintenance/maintenance-lockout/?tab=Maintenance Lockout',
		color: '#0d6efda8',
	},
	///////////////////////////////////////////////////////////////////////////////////
	{
		section: 'Maintenance',
		page: 'Maintenance Lockout',
		tab: 'Maintaining Safety Features',
		link: 'http://localhost:3001/smart-inspect/warren/maintenance/maintenance-lockout/?tab=Maintaining Safety Features',
		color: '#0d6efda8',
	},
	///////////////////////////////////////////////////////////////////////////////////
	{
		section: 'Maintenance',
		page: 'Preventive Maintenance',
		tab: 'Preventive Maintenance',
		link: 'http://localhost:3001/smart-inspect/warren/maintenance/preventive-maintenance/',
		color: '#0d6efda8',
	},
	///////////////////////////////////////////////////////////////////////////////////
	{
		section: 'Maintenance',
		page: 'OEM Maintenance',
		tab: 'OEM Maintenance',
		link: 'http://localhost:3001/smart-inspect/warren/maintenance/oem-maintenance/',
		color: '#0d6efda8',
	},
	///////////////////////////////////////////////////////////////////////////////////
	{
		section: 'Maintenance',
		page: 'Maintenance Procedures',
		tab: 'Allied Camera Replacement',
		link: 'http://localhost:3001/smart-inspect/warren/maintenance/maintenance-procedures/?tab=Allied Camera Replacement',
		color: '#0d6efda8',
	},
	{
		section: 'Maintenance',
		page: 'Maintenance Procedures',
		tab: 'Channel Board Replacement',
		link: 'http://localhost:3001/smart-inspect/warren/maintenance/maintenance-procedures/?tab=Channel Board Replacement',
		color: '#0d6efda8',
	},
	{
		section: 'Maintenance',
		page: 'Maintenance Procedures',
		tab: 'Trigger Board Replacement',
		link: 'http://localhost:3001/smart-inspect/warren/maintenance/maintenance-procedures/?tab=Trigger Board Replacement',
		color: '#0d6efda8',
	},
	{
		section: 'Maintenance',
		page: 'Maintenance Procedures',
		tab: 'Light Arch Replacement',
		link: 'http://localhost:3001/smart-inspect/warren/maintenance/maintenance-procedures/?tab=Light Arch Replacement',
		color: '#0d6efda8',
	},
	{
		section: 'Maintenance',
		page: 'Maintenance Procedures',
		tab: 'Lights 1-8 Replacement',
		link: 'http://localhost:3001/smart-inspect/warren/maintenance/maintenance-procedures/?tab=Lights 1-8 Replacement',
		color: '#0d6efda8',
	},
	{
		section: 'Maintenance',
		page: 'Maintenance Procedures',
		tab: 'Lights 2-5 Replacement',
		link: 'http://localhost:3001/smart-inspect/warren/maintenance/maintenance-procedures/?tab=Lights 2-5 Replacement',
		color: '#0d6efda8',
	},
	{
		section: 'Maintenance',
		page: 'Maintenance Procedures',
		tab: 'Double Wide Lights Replacement',
		link: 'http://localhost:3001/smart-inspect/warren/maintenance/maintenance-procedures/?tab=Double Wide Lights Replacement',
		color: '#0d6efda8',
	},
	///////////////////////////////////////////////////////////////////////////////////
	{
		section: 'Maintenance',
		page: 'Machine Ledgers',
		tab: 'Machine Ledgers',
		link: 'http://localhost:3001/smart-inspect/warren/maintenance/maintenance-procedures/?tab=machine Ledgers',
		color: '#0d6efda8',
	},
	///////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////
	{
		section: 'Troubleshooting',
		page: 'Troubleshooting Overview',
		tab: 'Troubleshooting Overview',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/troubleshoot-overview/?tab=Troubleshooting Overview',
		color: '#920e0ead',
	},
	{
		section: 'Troubleshooting',
		page: 'Troubleshooting Overview',
		tab: 'Troubleshooting Guidelines',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/troubleshoot-overview/?tab=Troubleshooting Guidelines',
		color: '#920e0ead',
	},
	{
		section: 'Troubleshooting',
		page: 'Troubleshooting Overview',
		tab: 'Experience',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/troubleshoot-overview/?tab=Experience',
		color: '#920e0ead',
	},
	{
		section: 'Troubleshooting',
		page: 'Troubleshooting Overview',
		tab: 'Step-by-Step Approach',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/troubleshoot-overview/?tab=Step-by-Step Approach',
		color: '#920e0ead',
	},
	{
		section: 'Troubleshooting',
		page: 'Troubleshooting Overview',
		tab: 'Intermittent Failures',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/troubleshoot-overview/?tab=Intermittent Failures',
		color: '#920e0ead',
	},
	{
		section: 'Troubleshooting',
		page: 'Troubleshooting Overview',
		tab: 'Sequence Stops',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/troubleshoot-overview/?tab=Sequence Stops',
		color: '#920e0ead',
	},
	{
		section: 'Troubleshooting',
		page: 'Troubleshooting Overview',
		tab: 'Root Cause',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/troubleshoot-overview/?tab=Root Cause',
		color: '#920e0ead',
	},
	{
		section: 'Troubleshooting',
		page: 'Troubleshooting Overview',
		tab: 'HMI',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/troubleshoot-overview/?tab=HMI',
		color: '#920e0ead',
	},
	{
		section: 'Troubleshooting',
		page: 'Troubleshooting Overview',
		tab: 'Fault Recovery Procedure',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/troubleshoot-overview/?tab=Fault Recovery Procedure',
		color: '#920e0ead',
	},
	{
		section: 'Troubleshooting',
		page: 'Troubleshooting Overview',
		tab: 'Troubleshooting Process',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/troubleshoot-overview/?tab=Troubleshooting Process',
		color: '#920e0ead',
	},
	///////////////////////////////////////////////////////////////////////////////////
	{
		section: 'Troubleshooting',
		page: 'Mechanical Troubleshooting',
		tab: 'Mechanical Troubleshooting',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/mechanical-troubleshooting/?tab=Mechanical Troubleshooting',
		color: '#920e0ead',
	},
	///////////////////////////////////////////////////////////////////////////////////
	{
		section: 'Troubleshooting',
		page: 'Electrical Troubleshooting',
		tab: 'Electrical Troubleshooting Overview',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/electrical-troubleshooting/?tab=Electrical Troubleshooting Overview',
		color: '#920e0ead',
	},
	{
		section: 'Troubleshooting',
		page: 'Electrical Troubleshooting',
		tab: 'Electrical Troubleshooting Procedure',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/electrical-troubleshooting/?tab=Electrical Troubleshooting Procedure',
		color: '#920e0ead',
	},
	{
		section: 'Troubleshooting',
		page: 'Electrical Troubleshooting',
		tab: 'Sequence Stops',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/electrical-troubleshooting/?tab=Sequence Stops',
		color: '#920e0ead',
	},
	{
		section: 'Troubleshooting',
		page: 'Electrical Troubleshooting',
		tab: 'Repairing Sensors',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/electrical-troubleshooting/?tab=Repairing Sensors',
		color: '#920e0ead',
	},
	{
		section: 'Troubleshooting',
		page: 'Electrical Troubleshooting',
		tab: 'Non-Actuating Problems',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/electrical-troubleshooting/?tab=Non-Actuating Problems',
		color: '#920e0ead',
	},
	{
		section: 'Troubleshooting',
		page: 'Electrical Troubleshooting',
		tab: 'Programmable Logic Controller (PLC)',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/electrical-troubleshooting/?tab=Programmable Logic Controller (PLC)',
		color: '#920e0ead',
	},
	{
		section: 'Troubleshooting',
		page: 'Electrical Troubleshooting',
		tab: 'PLC Inputs',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/electrical-troubleshooting/?tab=PLC Inputs',
		color: '#920e0ead',
	},
	{
		section: 'Troubleshooting',
		page: 'Electrical Troubleshooting',
		tab: 'PLC Outputs',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/electrical-troubleshooting/?tab=PLC Outputs',
		color: '#920e0ead',
	},
	{
		section: 'Troubleshooting',
		page: 'Electrical Troubleshooting',
		tab: 'PLC Processor',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/electrical-troubleshooting/?tab=PLC Processor',
		color: '#920e0ead',
	},
	{
		section: 'Troubleshooting',
		page: 'Electrical Troubleshooting',
		tab: 'Allen Bradley GuardLogix',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/electrical-troubleshooting/?tab=Allen Bradley GuardLogix',
		color: '#920e0ead',
	},
	{
		section: 'Troubleshooting',
		page: 'Electrical Troubleshooting',
		tab: 'Control Panel',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/electrical-troubleshooting/?tab=Control Panel',
		color: '#920e0ead',
	},
	{
		section: 'Troubleshooting',
		page: 'Electrical Troubleshooting',
		tab: 'Proximity / Limit Switch',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/electrical-troubleshooting/?tab=Proximity / Limit Switch',
		color: '#920e0ead',
	},
	{
		section: 'Troubleshooting',
		page: 'Electrical Troubleshooting',
		tab: 'Electrical Device Inspection',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/electrical-troubleshooting/?tab=Electrical Device Inspection',
		color: '#920e0ead',
	},
	///////////////////////////////////////////////////////////////////////////////////
	{
		section: 'Troubleshooting',
		page: 'OEM Troubleshooting',
		tab: 'OEM  Equipment Troubleshooting',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/oem-troubleshooting',
		color: '#920e0ead',
	},
	///////////////////////////////////////////////////////////////////////////////////
	{
		section: 'Troubleshooting',
		page: 'SMARTInspect Troubleshooting',
		tab: 'SMARTInspect Troubleshooting Overview',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/smart-inspect-troubleshooting/?tab=SMARTInspect Troubleshooting Overview',
		color: '#920e0ead',
	},
	{
		section: 'Troubleshooting',
		page: 'SMARTInspect Troubleshooting',
		tab: "PowerPaint 'Rendering' Issues",
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/smart-inspect-troubleshooting/?tab=PowerPaint Rendering Issues',
		color: '#920e0ead',
	},
	{
		section: 'Troubleshooting',
		page: 'SMARTInspect Troubleshooting',
		tab: "'Missing' Configuration Files",
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/smart-inspect-troubleshooting/?tab=Missing Configuration Files',
		color: '#920e0ead',
	},
	{
		section: 'Troubleshooting',
		page: 'SMARTInspect Troubleshooting',
		tab: 'SQL Server Exceptions',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/smart-inspect-troubleshooting/?tab=SQL Server Exceptions',
		color: '#920e0ead',
	},
	{
		section: 'Troubleshooting',
		page: 'SMARTInspect Troubleshooting',
		tab: 'Recovering From Fault State',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/smart-inspect-troubleshooting/?tab=Recovering From Fault State',
		color: '#920e0ead',
	},
	{
		section: 'Troubleshooting',
		page: 'SMARTInspect Troubleshooting',
		tab: 'Finesse Deck Issues',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/smart-inspect-troubleshooting/?tab=Finesse Deck Issues',
		color: '#920e0ead',
	},
	///////////////////////////////////////////////////////////////////////////////////
	{
		section: 'Troubleshooting',
		page: 'Hardware Troubleshooting',
		tab: 'ALLIED Camera Troubleshooting',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/hardware-troubleshooting/?tab=ALLIED Camera Troubleshooting',
		color: '#920e0ead',
	},
	{
		section: 'Troubleshooting',
		page: 'Hardware Troubleshooting',
		tab: 'No LED / Channel Board Power',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/hardware-troubleshooting/?tab=No LED / Channel Board Power',
		color: '#920e0ead',
	},
	{
		section: 'Troubleshooting',
		page: 'Hardware Troubleshooting',
		tab: 'LED Board Not Illuminated',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/hardware-troubleshooting/?tab=LED Board Not Illuminated',
		color: '#920e0ead',
	},
	{
		section: 'Troubleshooting',
		page: 'Hardware Troubleshooting',
		tab: 'Suspected LED Trigger Problem',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/hardware-troubleshooting/?tab=Suspected LED Trigger Problem',
		color: '#920e0ead',
	},
	{
		section: 'Troubleshooting',
		page: 'Hardware Troubleshooting',
		tab: 'No Trigger Board Power',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/hardware-troubleshooting/?tab=No Trigger Board Power',
		color: '#920e0ead',
	},
	{
		section: 'Troubleshooting',
		page: 'Hardware Troubleshooting',
		tab: 'Suspected Encoder Signal Problem',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/hardware-troubleshooting/?tab=Suspected Encoder Signal Problem',
		color: '#920e0ead',
	},
	{
		section: 'Troubleshooting',
		page: 'Hardware Troubleshooting',
		tab: 'Suspected Part Detect Signal Problem',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/hardware-troubleshooting/?tab=Suspected Part Detect Signal Problem',
		color: '#920e0ead',
	},
	{
		section: 'Troubleshooting',
		page: 'Hardware Troubleshooting',
		tab: 'Suspected Laser Photoeye Signal Problem',
		link: 'http://localhost:3001/smart-inspect/warren/troubleshooting/hardware-troubleshooting/?tab=Suspected Laser Photoeye Signal Problem',
		color: '#920e0ead',
	},
	///////////////////////////////////////////////////////////////////////////////////
	{
		section: 'Drawings',
		page: 'Mechanical Drawings',
		tab: 'Mechanical Drawings',
		link: 'http://localhost:3001/smart-inspect/warren/drawings/?tab=Mechanical Drawings',
		color: '#920e0ead',
	},
	{
		section: 'Drawings',
		page: 'Electrical Drawings',
		tab: 'Electrical Drawings',
		link: 'http://localhost:3001/smart-inspect/warren/drawings/?tab=Electrical Drawings',
		color: '#920e0ead',
	},
	{
		section: 'Drawings',
		page: 'Vendor Drawings',
		tab: 'Vendor Drawings',
		link: 'http://localhost:3001/smart-inspect/warren/drawings/?tab=Vendor Drawings',
		color: '#920e0ead',
	},
];

export default SearchData;
