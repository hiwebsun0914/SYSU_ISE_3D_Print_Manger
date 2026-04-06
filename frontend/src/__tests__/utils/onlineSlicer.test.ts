import { describe, expect, it } from 'vitest';
import { resolveOnlineSlicerUrlTemplate } from '../../utils/onlineSlicer';

describe('resolveOnlineSlicerUrlTemplate', () => {
  it('replaces request host placeholders with the current browser location', () => {
    const resolved = resolveOnlineSlicerUrlTemplate(
      '{{requestScheme}}://{{requestHost}}:6081/vnc.html?autoconnect=1&resize=remote',
      {
        protocol: 'http:',
        hostname: '192.168.0.3',
        host: '192.168.0.3:8000',
        port: '8000',
        origin: 'http://192.168.0.3:8000',
      },
    );

    expect(resolved).toBe('http://192.168.0.3:6081/vnc.html?autoconnect=1&resize=remote');
  });

  it('supports encoded placeholders and IPv6 hosts', () => {
    const resolved = resolveOnlineSlicerUrlTemplate(
      '{{requestOrigin}}/?target={{requestHostEncoded}}&port={{requestPort}}',
      {
        protocol: 'http:',
        hostname: '2001:db8::10',
        host: '[2001:db8::10]:8000',
        port: '8000',
        origin: 'http://[2001:db8::10]:8000',
      },
    );

    expect(resolved).toBe('http://[2001:db8::10]:8000/?target=%5B2001%3Adb8%3A%3A10%5D&port=8000');
  });
});
