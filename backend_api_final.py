#!/usr/bin/env python3
"""
The Bias Lab - Production Backend Pipeline
Track 1 + 6 Hybrid Submission

Real bias detection API with operations monitoring
Ready for production deployment
"""

import asyncio
import aiohttp
import time
import json
import re
import os
from typing import Dict, List, Optional, Tuple
from dataclasses import dataclass, asdict
from datetime import datetime, timedelta
from urllib.parse import urlparse
import logging

from fastapi import FastAPI, HTTPException, BackgroundTasks
from fast