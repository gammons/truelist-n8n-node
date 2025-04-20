// packages/nodes-base/nodes/Truelist/Truelist.node.ts
import { IExecuteFunctions } from 'n8n-workflow';

import {
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeConnectionType,
} from 'n8n-workflow';

export class Truelist implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Truelist.io',
		name: 'truelist',
		icon: 'fa:check-circle',
		group: ['transform'],
		version: 1,
		description: 'Validate email addresses using Truelist API',
		defaults: {
			name: 'Truelist',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		// inputs: ['={{"main"}}'],
		//outputs: ['={{"main"}}'],
		credentials: [
			{
				name: 'truelistApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				default: '',
				placeholder: 'test@example.com',
				required: true,
				description: 'Email address to validate',
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		const credentials = await this.getCredentials('truelistApi');

		for (let i = 0; i < items.length; i++) {
			const email = this.getNodeParameter('email', i) as string;
			const endpoint = `https://api.truelist.io/api/v1/verify_inline?email=${encodeURIComponent(email)}`;

			const responseData = await this.helpers.request({
				method: 'GET',
				uri: endpoint,
				headers: {
					Authorization: `Bearer ${credentials.apiKey}`,
				},
				json: true,
			});

			returnData.push({ json: responseData });
		}

		return [returnData];
	}
}
