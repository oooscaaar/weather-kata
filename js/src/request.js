import request from 'request';
import { promisify } from 'util';

export const rp = promisify(request);
