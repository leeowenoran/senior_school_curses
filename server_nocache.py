#!/usr/bin/env python3
import http.server
import socketserver

PORT = 8765

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

with socketserver.TCPServer(('', PORT), NoCacheHandler) as httpd:
    print(f'服务已启动: http://localhost:{PORT} (无缓存)')
    httpd.serve_forever()
