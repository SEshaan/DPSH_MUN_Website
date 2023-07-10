import type { VercelRequest, VercelResponse } from '@vercel/node';

import { redisIncr } from './_functions';

//

const countKey = 'visitorcount';

async function get(request: VercelRequest, response: VercelResponse): Promise<VercelResponse> {
	try {
		return response.status(200).json({ count: await redisIncr(countKey) });
	} catch (err) {
		return response.status(200).json({ count: 0 });
	}
}

export default async (
	request: VercelRequest,
	response: VercelResponse
): Promise<VercelResponse> => {
	switch (request.method?.toLowerCase()) {
		case 'get':
			return get(request, response);
		default:
			return response.status(404).json({
				error: true,
				message: `This endpoint does not allow ${request.method} requests.`,
				data: []
			});
	}
};
