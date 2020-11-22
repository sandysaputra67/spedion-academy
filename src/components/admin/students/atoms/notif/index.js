import React from 'react';

const NotifStudent = (props) => {
    return (
        <>
            <div class="row">

                <div class="col-12">
                    <div class="card m-b-30">
                        <div class="card-body">

                            <div class="row">
                                <div class="col-md-12">
                                    <section id="cd-timeline" class="cd-container">
                                        <div class="cd-timeline-block">
                                            <div class="cd-timeline-img cd-success">
                                                <i class="mdi mdi-adjust"></i>
                                            </div>

                                            <div class="cd-timeline-box">
                                                <div class="cd-timeline-content text-center">
                                                    <h3>Timeline Event One</h3>
                                                    <p class="mb-0 text-muted font-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
                                                    <span class="cd-date">May 23</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="cd-timeline-block">
                                            <div class="cd-timeline-img cd-danger">
                                                <i class="mdi mdi-adjust"></i>
                                            </div>

                                            <div class="cd-timeline-box right">
                                                <div class="cd-timeline-content text-center">
                                                    <h3>Timeline Event Two</h3>
                                                    <p class="m-b-20 text-muted font-14">Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.</p>
                                                    <button type="button" class="btn btn-primary btn-rounded waves-effect waves-light m-t-5">See more detail</button>

                                                    <span class="cd-date">May 30</span>
                                                </div>
                                            </div>
                                        </div>

                                       
                                      
                                    </section>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotifStudent;