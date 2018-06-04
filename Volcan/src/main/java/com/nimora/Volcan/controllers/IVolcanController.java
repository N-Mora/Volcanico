package com.nimora.Volcan.controllers;

import com.nimora.Volcan.services.IVolcansService;

public interface IVolcanController {

	IVolcansService getVolcans();

	void setVolcans(IVolcansService volcanService);

}