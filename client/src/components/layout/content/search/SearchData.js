// --safety-color: #dcc132db;

// 	--equipment-color: #dc8823db;

// 	--operation-color: #076407b5;

// 	--maintenance-color: #0d6efda8;

// 	--troubleshooting-color: #920e0ead;

// 	--appendix-color: #4c1b7dd1;

const SearchData = [
	{
		section: 'Safety Overview',
		keywords: ['overview', 'notices', 'general safety', 'personal safety', 'work area safety', 'lockout/tagout placard'],
		link: '/smart-inspect/warren/safety/safety-overview',
		color: '#dcc132db',
	},
	{
		section: 'Control Safety',
		keywords: ['electrical safety', 'mechanical safety'],
		link: '/smart-inspect/warren/safety/control-safety',
		color: '#dcc132db',
	},
	{
		section: 'Safety Devices',
		keywords: ['emergency stop pushbuttons'],
		link: '/smart-inspect/warren/safety/safety-devices',
		color: '#dcc132db',
	},
	{
		section: 'Equipment Lockout',
		keywords: [],
		link: '/smart-inspect/warren/safety/equipment-lockout',
		color: '#dcc132db',
	},
	{
		section: 'Energy Sources',
		keywords: ['PDP Main Power Disconnect'],
		link: '/smart-inspect/warren/safety/energy-sources',
		color: '#dcc132db',
	},
	{
		section: 'Equipment Overview',
		keywords: ['SmartInspect Layout', 'Drawings List', 'Sequence of Operations'],
		link: '/smart-inspect/warren/equipment/equipment-overview',
		color: '#dc8823db',
	},
	{
		section: 'Assembly',
		keywords: ['inspection frame assembly', 'camera mounting assembly', 'camera assembly', 'lighting assembly'],
		link: '/smart-inspect/warren/equipment/assemblies',
		color: '#dc8823db',
	},
	{
		section: 'Electrical Panels',
		keywords: ['PDP', 'transformer stand', 'PAC', 'server panel', 'trigger panels'],
		link: '/smart-inspect/warren/equipment/electrical-panels',
		color: '#dc8823db',
	},
	{
		section: 'System Control',
		keywords: ['system control console', 'inspection monitor', 'HMI'],
		link: '/smart-inspect/warren/equipment/system-control',
		color: '#dc8823db',
	},
	{
		section: 'Part Detect Skid',
		keywords: ['encoder wheel line tracker', 'ab skid detect switch bracket', 'part detect photoeye assembly', 'door open laser assembly'],
		link: '/smart-inspect/warren/equipment/part-detect',
		color: '#dc8823db',
	},
	{
		section: 'Maintenance Overview',
		keywords: [],
		link: '/smart-inspect/warren/maintenance/maintenance-overview',
		color: '#0d6efda8',
	},
	{
		section: 'Maintenance Safety',
		keywords: ['general safety precautions', 'mechanical maintenance safety', 'electrical maintenance safety'],
		link: '/smart-inspect/warren/maintenance/maintenance-safety',
		color: '#0d6efda8',
	},
	{
		section: 'Preventive Maintenance',
		keywords: ['mechanical preventive maintenance', 'electrical preventive maintenance'],
		link: '/smart-inspect/warren/maintenance/preventive-maintenance',
		color: '#0d6efda8',
	},
	{
		section: 'Maintenance Lockout',
		keywords: ['maintenance lockout', 'maintaining safety features'],
		link: '/smart-inspect/warren/maintenance/maintenance-lockout',
		color: '#0d6efda8',
	},

	{
		section: 'OEM Maintenance',
		keywords: ['allen bradley', 'allied vision', 'fuji film', 'pdf'],
		link: '/smart-inspect/warren/maintenance/oem-maintenance',
		color: '#0d6efda8',
	},

	{
		section: 'Maintenance Procedures',
		keywords: ['allied camera', 'channel board', 'trigger board', 'light arch', 'lights 1-8', 'lights 2-5', 'double wide lights'],
		link: '/smart-inspect/warren/maintenance/maintenance-procedures',
		color: '#0d6efda8',
	},
	{
		section: 'Machine Ledgers',
		keywords: ['allied camera', 'channel board', 'trigger board', 'light arch', 'lights 1-8', 'lights 2-5', 'double wide lights'],
		link: '/smart-inspect/warren/maintenance/machine-ledgers',
		color: '#0d6efda8',
	},
	{
		section: 'Troubleshooting Overview',
		keywords: ['five troubleshooting guidelines', 'experience', 'step-by-step', 'intermittent failures', 'sequence stops', 'root cause', 'HMI', 'fault recovery procedure', 'troubleshooting process'],
		link: '/smart-inspect/warren/troubleshooting/troubleshoot-overview',
		color: '#920e0ead',
	},
	{
		section: 'Mechanical Troubleshooting',
		keywords: [],
		link: '/smart-inspect/warren/troubleshooting/mechanical-troubleshooting',
		color: '#920e0ead',
	},
	{
		section: 'Electrical Troubleshooting',
		keywords: ['procedure', 'sequence stops', 'repairing sensors', 'non-actuating problems', 'plc inputs', 'plc outputs', 'plc processor', 'allen bradley guardlogix', 'control panel', 'proximity limit switch', 'electrical device inspection'],
		link: '/smart-inspect/warren/troubleshooting/electrical-troubleshooting',
		color: '#920e0ead',
	},
	{
		section: 'OEM Troubleshooting',
		keywords: ['allen bradley', 'fanuc', 'graco', 'kollmorgen', 'sick', 'SMC', 'teledyne'],
		link: '/smart-inspect/warren/troubleshooting/oem-troubleshooting',
		color: '#920e0ead',
	},
	{
		section: 'SmartInspect Troubleshooting',
		keywords: ['power paint rendering issues', 'missing config files', 'sql server exceptions', 'recovering from fault state'],
		link: '/smart-inspect/warren/troubleshooting/smart-inspect-troubleshooting',
		color: '#920e0ead',
	},
	{
		section: 'Appendix',
		keywords: ['adder', 'allen bradley', 'CAT1000', 'hewlett packard', 'trip-lite'],
		link: '/smart-inspect/warren/appendix',
		color: '#4c1b7dd1',
	},
];

export default SearchData;
