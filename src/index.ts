import { RNAcanvas } from '@rnacanvas/app-object';
export { RNAcanvas };

// make the RNAcanvas app object constructor globally available
(window as any).RNAcanvas = RNAcanvas;
