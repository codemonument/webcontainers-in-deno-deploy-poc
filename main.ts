import { WebContainer } from '@webcontainer/api';
import { files } from './src/files.ts';

// Call only once
const webcontainerInstance = await WebContainer.boot();

await webcontainerInstance.mount(files);

await webcontainerInstance.spawn('npm', ['run', 'hello']);