# Copyright 2020 Marius Wilms, Christoph Labacher. All rights reserved.
# Copyright 2019 Atelier Disko. All rights reserved.
#
# Use of this source code is governed by a BSD-style
# license that can be found in the LICENSE file.

.PHONY: build
build:
	yarn node esbuild.js

.PHONY: clean
clean:
	if [ -d ./build ]; then rm -r ./build; fi
	
.PHONY: prettier
prettier:
	yarn run prettier --write **/*.js
